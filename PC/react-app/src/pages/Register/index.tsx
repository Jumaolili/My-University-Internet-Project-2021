import React ,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer } from 'mobx-react'

//引入封装API


//引入组件
import ChooseList from '../../components/ChooseList'


//引入图片
import Title from '../../images/title.png'

interface Props{

}


const Register:React.FC<Props>=(props)=>{
    let [choose,setChoose]=React.useState(false); //控制choose显隐
    let [email,setEmail]=React.useState(''); //获取email
    let [emailType,setEmailType]=React.useState('@qq.com'); //获取email类型
    let [loginCode,setloginCode]=React.useState(''); //注册码
    let [password,setPassword]=React.useState(''); //密码
    let [rePassword,setRePassword]=React.useState(''); //再次输入密码
    let [invite,setInvite]=React.useState('')

    //事件处理函数------------------------------
    //控制choose
    function showChoose(e:any) {
        setChoose(!choose)
    }
    //关闭choose
    function hideChoose(e:any) {
        if(choose==true){
            setChoose(false)
        }
    }
    //修改email类型
    function chooseEmail(type:string) {
        setEmailType(type)
    }
    //获取注册邮箱
    function getEmail(e:any) {
        setEmail(e.target.value);
    }
    //获取注册码
    function getLoginCode(e:any) {
        setloginCode(e.target.value);
    }
    //获取密码
    function getPassWord(e:any) {
        setPassword(e.target.value);
    }
    //获取确认密码
    function getRePassWord(e:any) {
        setRePassword(e.target.value);
    }
    //获取邀请码
    function getInvite(e:any) {
        setloginCode(e.target.value);
    }
    //注册
    function login() {
        console.log({
            email:email.trim(),
            emailType:emailType.trim(),
            loginCode:loginCode.trim(),
            password:password.trim(),
            rePassword:rePassword.trim(),
            invite:invite.trim()
        })
    }

   
    React.useEffect(() => {
        
    }, [])



    return(
        <div className={style.container} onClick={hideChoose}>
            <div className={style.form_container}>
                <div className={style.title}>
                    <img src={Title} alt="Wanted Selling"/>
                    <p>{"NIKONIKO KAWAII~ (QWQ)"}</p>
                </div>
                <div className={style.form}>
                    <div className={style.account}>
                        <input  type="text" onChange={getEmail} placeholder={'邮箱'}/>
                        <div onClick={showChoose} className={style.emailType}>
                            {emailType}
                        </div>
                        {
                            choose?
                            <div className={style.chooseEmail}>
                                <ChooseList callback={chooseEmail.bind(this)}/>
                            </div>
                            :''
                        }
                    </div>
                    <div className={style.get_code}>
                        <input onChange={getLoginCode} type="text" placeholder={'注册码'}/>
                        <div className={style.send_code}>{'发送'}</div>
                    </div>
                    <div className={style.password}>
                        <input onChange={getPassWord} type="password" placeholder={'密码'}/>
                    </div>
                    <div className={style.password}>
                        <input onChange={getRePassWord} type="password" placeholder={'确认密码'}/>
                    </div>
                    <div className={style.register_code}>
                        <input onChange={getInvite} type="text" placeholder={'邀请码（选填）'}/>
                    </div>
                    <div onChange={login} className={style.register}>
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