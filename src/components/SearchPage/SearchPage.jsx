import React, { useState, useEffect } from "react";
import { submitQuery } from "../../api/submitQuery";
import ResultRow from "./ResultRow";
import "../../styles/search_page.css";

import axios from 'axios';
import token from "../../api/token.js";

const SearchPage = () => {
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState("");
	const [response, setResponse] = useState([]);
	const [formData, setFormData] = useState({
		keywords: "",
	});

  const [results, setResults] = useState([]);

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setIsSending(true);
		const query = {
      query: {
        query_string: {
          query: formData.keywords,
        },
      },
    };
    axios
      .post(`https://apitest.taxnotes.com/search/v1/query`, query, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setIsSending(false);
        // setError("");
        console.log(res.data)
        setResponse(res.data.hits.hits)
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
  
      });
	};

  useEffect(()=> {
    if (response.length){
      setResults(response)
      console.log('setting results')
    }
  }, [response])

	return (
    <>
		<div className="form-container">
			<form className="search-form" onSubmit={(e) => handleSubmit(e)}>
				<div className="search-form-header">
					<h1>Tax Notes Search</h1>
				</div>
				<div className="search-form-row">
					<div className="search-form-item">
						<label>Search Keywords:</label>
						{/* <br /> */}
						<input
							className="search-form-item-input"
							type="text"
							name="keywords"
							value={formData.keywords}
							onChange={handleChange}
						></input>
					</div>
				</div>
				<div className="search-form-row">
					<div className="search-form-item">
						{isSending ? (
							<div className="search-form-sending">Sending...</div>
						) : (
							<button className="search-form-button" type="submit">
								Search
							</button>
						)}
					</div>
				</div>
				<div className="search-form-row">
					<div className="search-form-message">
						{/* {error && <span>{error}</span>} */}
					</div>
				</div>
			</form>
		</div>
    <div className="results">
      {results.length > 0 ? (
        results.map((item, idx) => {
          return <ResultRow key={idx} item={item} />
        })
      ):(
        null
      )}
    </div>
    </>
	);
};

export default SearchPage;
