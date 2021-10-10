import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入utils
import * as api from '../../utils/api'
import Tools from '../../utils/tools'

//引入图片
import Title from '../../images/title.png'

//引入组件
import Model_Fail_1 from '../../components/Model_Fail_1'

interface Props{

}


const Login:React.FC<Props>=(props)=>{
    // let list_1=React.createRef();
    const [msg,setMsg]=React.useState([])
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');


    //事件处理函数
    function inputEmail(e:any) {
        setEmail(e.target.value);

    }

    function inputPassword(e:any) {
        setPassword(e.target.value);
    }

    function stopModelFresh() {
        setMsg([])
    }
    
    async function submit(e:any) {
        // 需要节流
        // 1. 收集state里的邮箱和密码 (检测)
        // 2. 发起网络请求
        // 3. 收到响应
        // 4. 根据响应决定是否跳转还是显示提示信息
        
        let data = {
            email:email,
            password:password
        };
        let err=Tools.checkLogin(data).filter((item:any)=>{
            if(item.status==false){
                return item
            }
        })
        if(err.length>0){
            setMsg(err);
            return;
        };
        let response = await api.login(data);
        console.log(response);
        
    }
        


    // 模拟DidMount
    React.useEffect(() => {
        // console.log('DidMounted');
    }, [])

    // 模拟DidUpdate
    React.useEffect(() => {
        // console.log('DidUpdated');
        console.log('login页面刷新');
        
    })

    





    return(
        <div className={style.container} onChange={stopModelFresh}>
            <div className={style.model}>
                {
                    msg.map((item:any)=>{
                        return <Model_Fail_1 key={Math.random()+item.msg} msg={item.msg}/>
                    })
                }
            </div>
            <div className={style.form_container}>
                <div className={style.title}>
                    <img src={Title} alt="Wanted Selling"/>
                    <p>{"NIKONIKO KAWAII~ (QWQ)"}</p>
                </div>
                <div className={style.form}>
                    <div className={style.account}>
                        <input type="email" onChange={inputEmail} value={email} placeholder={'邮箱'}/>
                    </div>
                    <div className={style.password}>
                        <input type="password" onChange={inputPassword} placeholder={'密码'}/>
                    </div>
                    <div className={style.login} onClick={Tools.throttle(submit,1500)}>
                        {"登入"}
                    </div>
                    <div className={style.functions}>
                        <a href="/register">{"注册"}</a>
                        <a href="/">{"忘记密码"}</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Login;