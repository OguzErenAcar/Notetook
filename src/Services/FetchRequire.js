

//not use Promise
 async function  request(url , data=false,method="GET"){
    const options={
        header:"",
        method:method
    }
    const response= await fetch(url,options)
    return await response.json()
}



export const postFetch =(url,data)=>request(url,data,"POST")
export const getFetch =(url)=>request(url,false)
