const HELLO = 'HELLO';

export function sayHello (message) {
  return {
    type: HELLO,
    message,
  }
}

const initialState = {
  message: 'hi',
};

export default function greeting (state = initialState, action) {
  switch (action.type) {
    case HELLO:
      return {
        ...state,
        [action.message]: 'hello',
      }
    default:
      return state
  }
}

