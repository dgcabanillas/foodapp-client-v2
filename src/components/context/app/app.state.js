import { useReducer } from 'react';
import { types } from './app.types';
import AppContext from './app.context';
import { appReducer } from './app.reducer';


const AppState = ({ children }) => {
  const [state, dispatch] = useReducer( appReducer, { 
    sidebarIsOpen: false,
    sidebarIndex: ''
  });

  const openSidebar = () => { dispatch({ type: types.OPEN_SIDEBAR })}
  const closeSidebar = () => { dispatch({ type: types.CLOSE_SIDEBAR })}
  const toggleSidebar = () => { dispatch({ type: types.TOGGLE_SIDEBAR })}
  const setSidebarIndex = (index) => { dispatch({ type: types.SET_SIDEBAR_INDEX, payload: index })}

  return (
    <AppContext.Provider value={{
      sidebarIsOpen: state.sidebarIsOpen,
      sidebarIndex: state.sidebarIndex,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      setSidebarIndex
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppState;