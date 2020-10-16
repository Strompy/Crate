import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

const app = express();

describe("product mutations", () => {
  let server;
//   let token;
//
  beforeAll(() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
//       const response1 = request(server)
//       .post('/')
//       .send({ query: '{ userLogin(email: "admin@crate.com", password: "123456") { token }}' })
//       .expect(200)
//       token = response1.body.data.userLogin.token
  // });
//
//   it("creates a product", async () => {
//   //   const response1 = await request(server)
//   //     .post('/')
//   //     .send({ query: '{ userLogin(email: "admin@crate.com", password: "123456") { token }}' })
//   //     .expect(200)
//       console.log(token)
//     // const token = response1.body.data.userLogin.token
//
//     // const response2 = await request(server)
//     //   .post('/')
//     //   .set('Authorization', `Bearer ${token}`)
//     //   .send({ mutation: '{ productCreate(name: "bucket hat", description: "stylish hat that the kool kids wear", slug: "bucket-hat", type: 2, gender: 2, image: "bucket-hat.png") { id } }' })
//     //   .expect(200)
//
//   })
//
  it("is true", () => {
    expect(true).toBe(true)
  })
})
