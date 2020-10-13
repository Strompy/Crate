import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("user queries", () => {
  beforeAll(() => {
    let server;

    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
  });

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns all users", async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ users {id, name, email } }' })
      .expect(200)
      
    console.log(response.body.data)
    expect(response.body.data.users.length).toEqual(3)
  })
})
