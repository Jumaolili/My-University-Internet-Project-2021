import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件

//引入图片






interface Props{

}


const MyWant:React.FC<Props>=(props)=>{
    
    //事件处理函数------------------------------------
    




    //组件生命周期
    React.useEffect(() => {
        
    }, [])

    return(
        <div className={style.container}>
           MyWant
        </div>
    )
    
}

export default MyWant;