import request from 'supertest';
import express from 'express';
import schema from '../../setup/schema';

describe("crate queries", () => {
  beforeAll(() =>{
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql:false
      })
    );
  });

  it("is true", () => {
    expect(true).toBe(true)
  })
})
