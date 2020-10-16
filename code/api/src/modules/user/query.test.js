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
      expect(response.body.data.users[0].id).toEqual(undefined)
      expect(response.body.data.users[1].id).toEqual(undefined)
  })

  // it returns a user by id
  it('returns a user by id', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ user(id: 1) { id name email password role bio image street city state zip } }'})
      .expect(200)

    const expectedKeys = ['id', 'name', 'email', 'password', 'role', 'bio', 'image', 'street', 'city', 'state', 'zip']
    expect(Object.keys(response.body.data.user)).toEqual(expectedKeys)
  })

  // it logs in a user and returns a JWT
  it('logs in a user and returns JWT', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ userLogin(email: "user@crate.com", password: "123456") { token } }'})
      .expect(200)

    expect(Object.keys(response.body.data.userLogin)).toEqual([ 'token' ])
    expect(response.body.data.userLogin.token).not.toBeUndefined()
    expect(response.body.data.userLogin.token).not.toBeNull()
  })

  // it returns user genders
  it('returns user Genders', async () => {
    const response = await request(server)
      .post('/')
      .send({ query: '{ userGenders { name } }'})
      .expect(200)

    expect(response.body.data.userGenders.length).toEqual(2)
    expect(response.body.data.userGenders[0].name).toEqual('Male')
    expect(response.body.data.userGenders[1].name).toEqual('Female')
  })
});
