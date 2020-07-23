import React, {createContext, FC, useReducer} from 'react';
import {CHANGE_SCREEN} from 'src/constants';
import screenReducer from './screenReducer';

type ScreenContext = {
  todoId: string | null;
  changeScreen: (id: string | null) => void;
};

export const ScreenContext = createContext({} as ScreenContext);

export const ScreenState: FC = ({children}) => {
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id: string | null) => {
    dispatch({type: CHANGE_SCREEN, payload: id});
  };

  return (
    <ScreenContext.Provider value={{todoId: state, changeScreen}}>
      {children}
    </ScreenContext.Provider>
  );
};
