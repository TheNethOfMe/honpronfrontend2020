import React, { useContext, useEffect, useState } from "react";

import EntryContext from "../../context/entries/entryContext";
import EntryList from "../entries/EntryList";
import Pagination from "../entries/parts/Pagination";

import MenuState from "../../context/menu/menuState";
import MainMenu from "../entries/parts/MainMenu";

const Entries = () => {
  const entryContext = useContext(EntryContext);
  const { entries, pagination, getEntries } = entryContext;
  const [page, setPage] = useState(1);
  useEffect(() => {
    getEntries({ page });
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [page]);
  return (
    <div className="entry-container">
      <div className="entry-container_list">
        <EntryList entries={entries} />
        {!!Object.keys(pagination) && (
          <Pagination
            page={page}
            pagination={pagination}
            handlePagination={setPage}
          />
        )}
      </div>

      <div className="entry-container_menu">
        <MenuState>
          <MainMenu />
        </MenuState>
      </div>
    </div>
  );
};

export default Entries;
