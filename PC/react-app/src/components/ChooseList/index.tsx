import React , { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件


interface Props{
    list?:string[],
    callback?:any
}

let email=['@gmail.com','@qq.com','@sina.com','@foxmail.com','@sina.cn','@yahoo.com']

const ChooseList:React.FC<Props>=(props)=>{

    let [list,setList]=React.useState(email);
    
    // getDerivedStateFromProps
    React.useEffect(() => {
        // props有更新，才执行对应的修改，没有更新执行另外的逻辑
        
    })

    // 模拟DidMount
    React.useEffect(() => {
        // console.log("相当于DidMount");
    }, [])


    React.useEffect(() => {
    	// 在 componentDidMount，以及 count 更改时 componentDidUpdate 执行的内容
        
    }, [list])



    return(
        <div className={style.container} >
            <ul className={style.list}>
                {list.map((item:string)=>{
                    return <li key={item} onClick={(e:any)=>{props.callback(item)}} className={style.list_item}>{item}</li>
                })}
            </ul>
        </div>
    )
    
}

export default ChooseList;