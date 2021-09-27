import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react'

//引入组件

//引入图片
import Ham from '../../images/ham.png'
import Center from '../../images/center.png'
import Talk from '../../images/talk_2.png'
import Back from '../../images/back.png';


interface Props{

}


const Main:React.FC<Props>=(props)=>{
    // let list_1=React.createRef();

    //事件处理函数
   
    React.useEffect(() => {
        
    }, [])



    return(
        <div className={style.container}>
            <nav className={style.nav}>
                <div className={style.nav_top}>
                    <p className={style.nav_title}>
                        {"Wanted & Selling"}
                    </p>
                    <img src={Back} alt="back"/>
                </div>
                <div className={style.nav_middle}>
                    <div className={style.group}>
                        <div className={style.item}>仪表盘</div>
                        <div className={style.item}>使用文档</div>
                    </div>
                    <div className={style.group}>
                        <p>订阅</p>
                        <div className={style.item}>我的订阅</div>
                        <div className={style.item}>购买订阅</div>
                    </div>
                    <div className={style.group}>
                        <p>财务</p>
                        <div className={style.item}>我的订单</div>
                        <div className={style.item}>我的邀请</div>
                    </div>
                    <div className={style.group}>
                        <p>用户</p>
                        <div className={style.item}>个人中心</div>
                        <div className={style.item}>我的工单</div>
                        <div className={style.item}>流量明细</div>
                    </div>
                </div>
                <div className={style.version}>
                    {'version 1.0.0'}
                </div>
            </nav>
            <header>
                <div className={style.header_ham}>
                    <img src={Ham} alt="nav"/>
                </div>
                <div className={style.header_title}>{'仪表盘'}</div>
                <div className={style.header_bar}>
                    <div className={style.bar_language}>
                        <img src={Talk} alt="language"/>
                    </div>
                    <div className={style.bar_center}>
                        <img src={Center} alt="center"/>
                        <div className={style.center_index}></div>
                    </div>
                </div>
            </header>
            <main>
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
            </main>
        </div>
    )
    
}

export default Main;