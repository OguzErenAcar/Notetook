import { getAxios, postAxios } from "./AxiosRequire";
import { getFetch, postFetch } from "./FetchRequire";


export const getData=()=>getFetch("https://jsonplaceholder.typicode.com/posts")
export const setData=()=>postFetch("","")
export const getDataAxios=()=>getAxios("https://jsonplaceholder.typicode.com/users")
export const setDataAxios=()=>postAxios("","")


