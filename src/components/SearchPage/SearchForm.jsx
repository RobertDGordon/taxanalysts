import React, { useState } from "react";
import { submitQuery } from "../../api/submitQuery";
import { createToken } from "../../api/createToken";

const SearchForm = (props) => {
	const { setResponse, setRecordsPerPage } = props;

	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState("Please generate a new token...");
	const [formData, setFormData] = useState({
		keywords: "",
		size: 20,
		recordsPerPage: 20,
    jurisdiction: ""
	});

	const sizes = [10, 20, 50, 100, 250];
	const jurisdictions = ["United States", "Canada", "European Union"];

	const handleChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
    console.log(formData)
	};

	const handleSizeChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setRecordsPerPage(Number(e.target.value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setIsSending(true);
		submitQuery(formData, setIsSending, setError, setResponse);
	};

	const handleCreateToken = (e) => {
		e.preventDefault();
		console.log(formData);
		setIsSending(true);
		createToken(formData, setIsSending, setError, setResponse);
	};

	return (
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
              required
						></input>
					</div>
					<div className="search-form-item">
						<label>Number Of Results:</label>
						<br />
						<select
							className="search-form-item-select"
							name="size"
							onChange={handleChange}
							value={formData.size}
							required
						>
							{sizes.map((size, index) => (
								<option value={size} key={index}>
									{size}
								</option>
							))}
						</select>
					</div>
					<div className="search-form-item">
						<label>Records Per Page:</label>
						<br />
						<select
							className="search-form-item-select"
							name="recordsPerPage"
							onChange={handleSizeChange}
							value={formData.recordsPerPage}
							required
						>
							{sizes.map((size, index) => (
								<option value={size} key={index}>
									{size}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="search-form-row">
					<div className="search-form-item">
						<label>Jurisdiction:</label>
						<br />
						<select
							className="search-form-item-select"
							name="jurisdiction"
							onChange={handleChange}
							value={formData.jurisdiction}
						>
              <option value="">
                All
              </option>
							{jurisdictions.map((item, index) => (
								<option value={item} key={index}>
									{item}
								</option>
							))}
						</select>
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
					{error ? (
						<div className="search-form-error">
							<button
								className="search-form-button"
								type="button"
								onClick={handleCreateToken}
							>
								Create New Token
							</button>
							<span>{error}</span>
						</div>
					) : null}
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
