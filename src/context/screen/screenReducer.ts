import {CHANGE_SCREEN} from 'src/constants';

type HandlersType = {
  [CHANGE_SCREEN]: (state: string | null, {payload}: {payload: string}) => any;
  DEFAULT: (state: string | null) => any;
};

const handlers: HandlersType = {
  [CHANGE_SCREEN]: (state, {payload}) => payload,
  DEFAULT: (state) => state,
};

const screenReducer = (state: any, action: any) => {
  const handler = handlers[action.type as 'CHANGE_SCREEN'] || handlers.DEFAULT;
  return handler(state, action);
};

export default screenReducer;
