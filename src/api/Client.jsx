import axios from "axios";

const ApiClient = () => {

    const {REACT_APP_API_URL} = process.env;

    const axiosInstance = axios.create(
        {
            baseURL: REACT_APP_API_URL,
            responseType: 'json'
        }
    );

    axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
    //   axiosInstance.defaults.headers.common = 'Bearer '+ getDecodedUser().token;

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // console.log(error);
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            const message = error?.response?.data ? JSON.stringify(error?.response?.data?.message) : error.message || error;
            // if (error && error.response && error.response.status === 404) {
            //      message = JSON.stringify(error.response.data.message);
            // } else if (error && error.response && error.response.status === 403) {
            //     message = JSON.stringify(error.response.data.message);

            // } else {
            //     switch (error?.response?.status) {
            //         case 401:
            //                        message = JSON.stringify(error.response.data.message);

            //             break;
            //         case 403:
            //                        message = JSON.stringify(error.response.data.message);

            //             break;
            //         case 404:
            //                         message = JSON.stringify(error.response.data.message);

            //             break;
            //         default: {
            //                         message = JSON.stringify(error.response.data.message);

            //         }
            //     }
            return Promise.reject({message: message.replace(/"/g, "")});//,status:error.response.status});
            // }
        }
    );

    return axiosInstance

}

export default ApiClient;