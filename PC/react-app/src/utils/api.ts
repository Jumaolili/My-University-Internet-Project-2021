import Tools from './tools';
import request from './request';

//引入interface类
import {Login_data} from './interface'

export async function login(data:Login_data){
    //2. 准备发送响应
    //3. return 响应
    let res = await request.post('/login',data)
    return res;
}








    
      
