import axios from "axios";
import token from "./token";

export const submitQuery = (formData, setIsSending, setError, setResponse) => {
	const query = {
		query: {
			query_string: {
				query: formData.keywords,
			},
		},
	};
  console.log(query)
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
      setResponse(res.data)
		})
		.catch((err) => {
			console.log(err);
			setIsSending(false);
			// setResponse("");
			// setError(err.response.data.message);
		});
};
