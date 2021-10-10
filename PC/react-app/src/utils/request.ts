import Tools from './tools';


const request ={
    baseURL:'http://127.0.0.1:8080',
    get:async function(url: string, data?: any) {
        let search=Tools.encodeFormat(data);
        let res = await fetch(`${request.baseURL}+${url}+${search}`,{
            method: 'GET', // or 'PUT'
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            mode: 'no-cors'
        })
        .then((res)=>{
            return res.json();
        })
        .catch(error => console.error('Error:', error))
        return res;
    },
    post:async function(url: string, data?: any) {
        let URL = request.baseURL+url;
        let res = fetch(URL,{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'
        })
        .then((res)=>{
            return res.json();
        })
        .catch(error => console.error('Error:', error));

        return res;
    }
}

export default request
  
