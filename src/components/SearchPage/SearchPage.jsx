import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ResultRows from "./ResultRows";
import PageSelect from "./PageSelect";

import "../../styles/search_page.css";

const SearchPage = () => {
	const [response, setResponse] = useState([]);
  const [results, setResults] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage, setRecordsPerPage] = useState(20);

	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const displayResults = results.slice(indexOfFirstRecord, indexOfLastRecord);
	const numberOfPages = Math.ceil(results.length / recordsPerPage)

  useEffect(()=> {
    if (response.length){
      setResults(response)
    }
  }, [response])

	return (
    <div className="search-page">
			<SearchForm setResponse={setResponse} setRecordsPerPage={setRecordsPerPage} />
			<ResultRows results={displayResults} />
			{results.length > 0 ?(
				<PageSelect numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			):(null)}
    </div>
	);
};

export default SearchPage;
