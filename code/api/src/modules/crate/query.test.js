import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("crates queries", () => {
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

  it("returns all crates", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{crates { name, description } }' })
      .expect(200)
    expect(response.body.data.crates.length).toEqual(6)
  })

  it("returns a crate", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ crateById(crateId: 1) { name, description } }' })
      .expect(200)
    expect(response.body.data.productById.name).toEqual("Clothes for Men")
    expect(response.body.data.productById.description).toEqual("A monthly supply of trendy clothes for men.")
  })

  it("is true", () => {
    expect(true).toBe(true)
  })
})
