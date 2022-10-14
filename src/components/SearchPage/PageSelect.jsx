import React, { useState, useEffect } from "react";

const PageSelect = ({ numberOfPages, currentPage, setCurrentPage }) => {
	const [pageNumbers, setPageNumbers] = useState([]);

	const nextPage = () => {
		if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
	};

	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	const handleClick = (e, page) => {
		e.preventDefault();
		setCurrentPage(page);
	};

	useEffect(() => {
		setPageNumbers(
			Array.from({ length: numberOfPages }, (_, index) => index + 1)
		);
	}, [numberOfPages]);

	return (
		<div className="page-numbers">
			<div className="page-link" onClick={prevPage}>
				{`<- Back`}
			</div>
      
			{pageNumbers.length > 0
				? pageNumbers.map((page, index) => (
						<div
							key={page}
							className={`page-number ${currentPage === page ? "active" : ""}`}
						>
							<button
								onClick={(e) => handleClick(e, page)}
								className="page-link"
							>
								{page}
							</button>
						</div>
				  ))
				: null}

			<div className="page-link" onClick={nextPage}>
				{`Next ->`}
			</div>
		</div>
	);
};

export default PageSelect;
