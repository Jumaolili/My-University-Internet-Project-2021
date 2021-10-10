import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件

//引入图片






interface Props{

}


const Control:React.FC<Props>=(props)=>{
    
    //事件处理函数------------------------------------
    




    //组件生命周期
    React.useEffect(() => {
        
    }, [])

    return(
        <div className={style.main_container}>
            <div className={style.container_swiper}></div>
            <div className={style.container_part}>
                <div className={style.item}>
                    <p>我的订阅</p>
                    <div className={style.control}></div>
                </div>
                <div className={style.item}>
                    <p>待办事件</p>
                    <div className={style.item_content}></div>
                </div>
                <div className={style.item}>
                    <p>使用必看</p>
                    <div className={style.item_content}></div>
                </div>
                <div className={style.item}>
                    <p>常见问题</p>
                    <div className={style.item_content}></div>
                </div>
                <div className={style.item}>
                    <p>微信端APP</p>
                    <div className={style.item_content}></div>
                </div>
            </div>
        </div>
    )
    
}

export default Control;