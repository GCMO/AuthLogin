import {createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext(); // create context

// the reducer is an if statemment that returns a new state based on the action: 
// login/logout/default which are the 3 cases possble for this Auth. 
export const authReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export const AuthContextProvider = ({children}) => { // children defines whatever the provider will wrap around. Works like react router
  const [state, dispatch] = useReducer(authReducer, {user:null})
  // immediately checks if there is a JTW in localstorage, if so dispatches login action
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      dispatch({ type: 'LOGIN', payload: token })
    }
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )

}

