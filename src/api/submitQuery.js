import axios from "axios";

export function getToken() {
	return localStorage.getItem('token')
}

export const submitQuery = (formData, setIsSending, setError, setResponse) => {

	let query = {}

	if(formData.jurisdiction){
		query = {
			query: {
				query_string: {
					query: formData.keywords,
				},
				"filter": [
					// {
					// 		"product_name": [
					// 				"Tax Notes Today Federal",
					// 				"Tax Notes Today State"
					// 		]
					// },
					{
							"jurisdictions": [
									formData.jurisdiction
							]
					}
				]
			},
			size: Number(formData.size)
		};
	}else {
		query = {
			query: {
				query_string: {
					query: formData.keywords,
				},
			},
			size: Number(formData.size)
		};
	}

  console.log('submit', query)
	axios
		.post(`https://apitest.taxnotes.com/search/v1/query`, query, {
			headers: {
				Authorization: getToken(),
			},
		})
		.then((res) => {
			setIsSending(false);
			setError("");
      console.log(res.data)
      setResponse(res.data.hits.hits)
		})
		.catch((err) => {
			console.log(err);
			setIsSending(false);
			setError(err.message)
		});
};
