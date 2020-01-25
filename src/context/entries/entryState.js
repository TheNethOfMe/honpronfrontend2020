import React, { useReducer } from "react";
import axios from "axios";
import EntryContext from "./entryContext";
import entryReducer from "./entryReducer";
import { GET_ENTRIES } from "../types";

// import testData from "../testData";

const EntryState = props => {
  const initialState = {
    entries: []
  };

  const [state, dispatch] = useReducer(entryReducer, initialState);

  // Get Entries
  const getEntries = async () => {
    try {
      const res = await axios.get("/api/v1/entries");
      console.log(res.data.data);
      dispatch({
        type: GET_ENTRIES,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EntryContext.Provider
      value={{
        entries: state.entries,
        getEntries
      }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};

export default EntryState;
