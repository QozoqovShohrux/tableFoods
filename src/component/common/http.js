import axios from "axios";
import { toast } from "react-toastify";
axios.interceptors.response.use(null, error => {
    console.log(error);
    const expextedError = error.response && error.response.status >= 404 && error.response.status < 500;
    if (!expextedError) {
        console.log("InterSeptors Errors");
        toast.error("Serverda Qandaydir Xatolik bor");
    };
    return Promise.reject(error);
})
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
const http = {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post
}
export default http;