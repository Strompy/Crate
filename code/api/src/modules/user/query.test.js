import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("user queries", () => {
  beforeAll(() =>{
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
})
