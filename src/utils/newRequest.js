import axios from "axios";

//backend port number
const newRequest=axios.create({
    baseURL:"http://localhost:8080/api/",
    withCredentials:true,
})

export default newRequest;