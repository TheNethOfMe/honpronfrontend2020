import React, { useContext, useEffect } from "react";
import EntryContext from "../../context/entries/entryContext";
import EntryList from "../entries/EntryList";

const Home = () => {
  const entryContext = useContext(EntryContext);
  const { entries, getEntries } = entryContext;
  useEffect(() => {
    getEntries();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="site-container">
      <EntryList entries={entries} />
    </div>
  );
};

export default Home;
