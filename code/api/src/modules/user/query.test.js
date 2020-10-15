import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("user queries", () => {
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

  it('works', () => {
    expect(true).toBe(true);
  })

  // It returns all users
  it('returns all users', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ users { name email } }' })
      .expect(200)

      expect(Object.keys(response.body.data)).toEqual(['users'])
      expect(response.body.data.users.length).toEqual(2)
      expect(response.body.data.users[0].name).toEqual('The Admin')
      expect(response.body.data.users[1].name).toEqual('The User')
      expect(response.body.data.users[0].email).toEqual('admin@crate.com')
      expect(response.body.data.users[1].email).toEqual('user@crate.com')
  })

  // it returns a user by id

  // it logs in a user and returns a JWT

  // it returns user genders

});
