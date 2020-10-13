import Item from '../../subscription/Item';
import userReducer from './state';

describe('Reducer Testing', () => {
  it('should check if SET_USER', () => {


    const actionSetUser = {
      type: "AUTH/SET_USER",
      user: {
        name: 'Bob',
        email: 'bob@aol.com',
        role: 'USER'
      }
    }
    
    const initState = {
      error: null,
      isLoading: false,
      isAuthenticated: false,
      details: null
    }

    const updatedState = {
      error: null,
      isLoading: false,
      isAuthenticated: true,
      details: {
        name: 'Bob',
        email: 'bob@aol.com',
        role: 'USER'
      }
    } 

    const result = userReducer(initState, actionSetUser);

    expect(result).toEqual(updatedState);
  });

  it('should check LOGIN_REQUEST', () => {

  })
})