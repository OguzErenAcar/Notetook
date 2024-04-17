import axios from "axios"


async function request (url, data=false,method="GET"){

   return await !data ? axios.get(url):axios.post(url,data)
}

export const getAxios=(url)=>request(url)
export const postAxios=(url,data)=>request(url,data,"POST")
