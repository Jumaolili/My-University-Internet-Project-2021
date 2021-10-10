import React , { useState, useEffect, useMemo, memo }from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'


//引入图片
import icon_success_2 from '../../images/icon_success_2.png';
import icon_fail_1 from '../../images/icon_fail_1.png';
import icon_cancel_1 from '../../images/icon_cancel_1.png';


//引入组件


interface Props{
    msg?:string
}


const Model_Fail_1:React.FC<Props>=(props)=>{
    const [msg,setMsg]=React.useState('');
       
    // getDerivedStateFromProps
    React.useEffect(() => {
        // props有更新，才执行对应的修改，没有更新执行另外的逻辑
        // console.log('getDerivedStateFromProps');
        
        
    },[props.msg])

    // 模拟DidMount
    React.useEffect(() => {
        // console.log('DidMounted');
    }, [])

    // 模拟DidUpdate
    React.useEffect(() => {
        // console.log('DidUpdated');
    })

    return(
        <div className={style.container} >
            <div className={style.model}>
                <div className={style.model_icon}>
                    <img src={icon_fail_1} alt=""/>
                </div>
                <div className={style.model_content}>
                    <p className={style.title}>请求失败</p>
                    <p className={style.msg}>{props.msg}</p>
                </div>
            </div>
        </div>
    )
    
}




export default Model_Fail_1;