import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入图片
import Title from '../../images/title.png'

//引入组件

interface Props{

}


const Login:React.FC<Props>=(props)=>{
    // let list_1=React.createRef();

    //事件处理函数
   
    React.useEffect(() => {
        
    }, [])



    return(
        <div className={style.container}>
            <div className={style.form_container}>
                <div className={style.title}>
                    <img src={Title} alt="Wanted Selling"/>
                    <p>{"NIKONIKO KAWAII~ (QWQ)"}</p>
                </div>
                <div className={style.form}>
                    <div className={style.account}>
                        <input type="text" placeholder={'邮箱'}/>
                    </div>
                    <div className={style.password}>
                        <input type="password" placeholder={'密码'}/>
                    </div>
                    <div className={style.login}>
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