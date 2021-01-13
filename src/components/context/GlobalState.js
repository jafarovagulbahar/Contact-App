import React, { createContext, useReducer ,useEffect} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState , ()=>{
    const localData = localStorage.getItem('state')
    return localData ? JSON.parse(localData) : []})
    
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
 }, [state])
  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  const viewUser = (user) => {
    dispatch({
      type: 'VIEW_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser,
      viewUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}