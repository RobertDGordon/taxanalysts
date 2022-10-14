import axios from "axios";

export const createToken = (formData, setIsSending, setError, setResponse) => {
  const token = process.env.REACT_APP_CREATE_TOKEN

  const body = {
    grant_type: 'client_credentials'
  }

	axios
		.post(`https://devauth.taxnotes.com/oauth2/token`, body, {
			headers: {
        "Content-Type": "application/x-www-form-urlencoded",
				Authorization: token,
			},
		})
		.then((res) => {
			setIsSending(false);
			setError("");
      console.log(res.data)
      localStorage.setItem('token',res.data.access_token)
      // setResponse(res.data)
		})
		.catch((err) => {
			console.log(err);
			setIsSending(false);
			setError(err.message)
		});
};
