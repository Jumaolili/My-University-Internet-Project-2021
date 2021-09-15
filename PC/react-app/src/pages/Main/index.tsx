import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件

interface Props{

}


const Main:React.FC<Props>=(props)=>{
    // let list_1=React.createRef();

    //事件处理函数
   
    React.useEffect(() => {
        
    }, [])



    return(
        <div>
            index
        </div>
    )
    
}

export default Main;