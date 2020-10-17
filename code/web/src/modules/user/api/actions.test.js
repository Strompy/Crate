import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'
import * as actions from './actions'


const middlewares = [thunk] 
const mockStore = configureMockStore(middlewares)


describe('User Actions', () => {
  let user
  beforeEach(() => {
     user = {name: 'Aeron', email: 'aeron@aol.com', role: 'USER'}
  })
  afterEach(() => {
    fetchMock.restore()
  })

  it('should check setUser is returning correct type', () => {
    const actionCall = actions.setUser(34087120, user)

    const expectedResult = {
      type: actions.SET_USER,
      user: user
    }

    expect(actionCall).toEqual(expectedResult)
  })

  it('should check login action return error message on post', () => {
    fetchMock.getOnce('/users', {
      body: { user: user},
      headers: { 'content-type': 'application/json' }
    })
    const store = mockStore({ users: [] })
    const actionCall = actions.login(user)

    const expectedActions = [
      {isLoading: true, type: actions.LOGIN_REQUEST},
      {error: "Please try again", type: actions.LOGIN_RESPONSE}
    ]

    return store.dispatch(actionCall).then(() => {
      // return of async actions
    expect(store.getActions()).toEqual(expectedActions)

    })
  })
  it('should check logout action', () => {
    const actionCall = actions.logout()
    

    const expectedResult = {
      type: actions.LOGOUT,
    }

    expect(actionCall).toEqual(expectedResult)

  })
})