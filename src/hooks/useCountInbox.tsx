import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";





const initialState = {
  count: 0,
};

type State = typeof initialState;

type Action = {
  type: "SET_COUNT";
  payload: number;
};

type CountInboxContextType = {
  count: number;
  setCountInbox: (count: number) => void;
};

function reducer(state: State, action: Action): 
State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
}

const CountInboxContext = createContext<CountInboxContextType | undefined>(
  undefined
);

function CountInboxProvider({ children }: { children: ReactNode }) {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  

  const setCountInbox = useCallback((count: number) => {
  dispatch({
    type: "SET_COUNT",
    payload: count,
  });
}, []);

const value = useMemo(
  () => ({
    count,
    setCountInbox,
  }),
  [count, setCountInbox]
);
  return (
    <CountInboxContext.Provider value={value}>
      {children}
    </CountInboxContext.Provider>
  );
}

function useCountInbox() {
  const context = useContext(CountInboxContext);

  if (!context) {
    throw new Error(
      "useCountInbox must be used within a CountInboxProvider"
    );
  }

  return context;
}

export { CountInboxProvider, useCountInbox };












