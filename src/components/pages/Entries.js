import React, { useContext, useEffect, useState } from "react";
import EntryContext from "../../context/entries/entryContext";
import EntryList from "../entries/EntryList";
import Pagination from "../entries/parts/Pagination";

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
    <div>
      <div>
        <EntryList entries={entries} />
        {!!Object.keys(pagination) && (
          <Pagination
            page={page}
            pagination={pagination}
            handlePagination={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default Entries;
