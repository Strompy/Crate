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

  it("is true", () => {
    expect(true).toBe(true)
  })
})
