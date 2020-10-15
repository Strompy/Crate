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

  it("returns a product", async () => {
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

  it("is true", () => {
    expect(true).toBe(true)
  })
})
