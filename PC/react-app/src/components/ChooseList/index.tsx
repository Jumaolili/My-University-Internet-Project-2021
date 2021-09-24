import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件


interface Props{

}


const ChooseList:React.FC<Props>=(props)=>{
    
    //事件处理函数
    


    React.useEffect(() => {
        
    }, [])



    return(
        <div className={style.container}>
            
        </div>
    )
    
}

export default ChooseList;