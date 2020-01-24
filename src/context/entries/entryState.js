import React, { useReducer } from "react";
import EntryContext from "./entryContext";
import entryReducer from "./entryReducer";
import { GET_ENTRIES } from "../types";

const EntryState = props => {
  const initialState = {
    entries: []
  };

  const [state, dispatch] = useReducer(entryReducer, initialState);

  // Get Entries

  return (
    <EntryContext.Provider
      value={{
        entries: state.entries
      }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};

export default EntryState;
