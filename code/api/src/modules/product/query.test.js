import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("product queries", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("returns all products", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{products { id, name, description, slug, type, gender, image } }' })
      .expect(200)
    expect(response.body.data.products.length).toEqual(8)
  })

  it("returns a product by Id", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ productById(productId: 1) { id, name, description, slug, type, gender, image } }' })
      .expect(200)
    expect(response.body.data.productById.id).toEqual(1)
    expect(response.body.data.productById.name).toEqual("Belt for Women")
    expect(response.body.data.productById.description).toEqual("A very nice belt for women.")
    expect(response.body.data.productById.slug).toEqual("belt-for-women",)
    expect(response.body.data.productById.type).toEqual(2)
    expect(response.body.data.productById.gender).toEqual(2)
    expect(response.body.data.productById.image).toEqual("/images/stock/belt-female.jpg")
  })

  it("returns a product by slug", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ product(slug: "belt-for-women" ) { id, name, description, slug, type, gender, image } }' })
      .expect(200)
    expect(response.body.data.product.id).toEqual(1)
    expect(response.body.data.product.name).toEqual("Belt for Women")
    expect(response.body.data.product.description).toEqual("A very nice belt for women.")
    expect(response.body.data.product.slug).toEqual("belt-for-women",)
    expect(response.body.data.product.type).toEqual(2)
    expect(response.body.data.product.gender).toEqual(2)
    expect(response.body.data.product.image).toEqual("/images/stock/belt-female.jpg")
  })

  it("returns related products", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ productsRelated(productId: 1) { id, name, description, slug, type, gender, image } }' })
      .expect(200)
    expect(response.body.data.productsRelated.length).toEqual(3)
  })

  it("is true", () => {
    expect(true).toBe(true)
  })
})
