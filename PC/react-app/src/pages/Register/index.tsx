import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件

//引入图片
import Title from '../../images/title.png'

interface Props{

}


const Register:React.FC<Props>=(props)=>{
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
                        <div className={style.emailType}>{"@gmail.com"}</div>
                        <div className={style.chooseType}>
                            
                        </div>
                    </div>
                    <div className={style.get_code}>
                        <input type="text" placeholder={'注册码送至邮箱'}/>
                        <div className={style.send_code}>{'发送'}</div>
                    </div>
                    <div className={style.password}>
                        <input type="password" placeholder={'密码'}/>
                    </div>
                    <div className={style.password}>
                        <input type="password" placeholder={'确认密码'}/>
                    </div>
                    <div className={style.register_code}>
                        <input type="text" placeholder={'注册码（选填）'}/>
                    </div>
                    <div className={style.register}>
                        {"注册"}
                    </div>
                    <div className={style.functions}>
                        <a href="/login">{"返回登陆"}</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Register;