import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react';
import { useHistory, useLocation, BrowserRouter, Switch, Route, Redirect, Router, RouteComponentProps, withRouter, Link, NavLink } from 'react-router-dom'


//引入组件
import Control from '../Main_Subpages/Index_1_Control';
import Manual from '../Main_Subpages/Index_2_Manual';
import MyPub from '../Main_Subpages/Object_1_MyPub';
import MyWant from '../Main_Subpages/Object_2_MyWant';
import MySub from '../Main_Subpages/Subscribe_1_MySub';
import TheirPub from '../Main_Subpages/Subscribe_2_TheirPub';
import Center from '../Main_Subpages/User_1_Center';
import History from '../Main_Subpages/User_2_History';


//引入图片
import Img_Ham from '../../images/ham.png'
import Img_Center from '../../images/center.png'
import Img_Talk from '../../images/talk_2.png'
import Img_Back from '../../images/back.png';
import Img_Dashboard from '../../images/control.png';
import Img_Note from '../../images/note.png';
import Img_Book from '../../images/book.png';
import Img_Buy from '../../images/buy.png';
import Img_Center_2 from '../../images/center_2.png';
import Img_Invite from '../../images/invite.png';
import Img_Notice from '../../images/notice.png';
import Img_Order from '../../images/order.png';
import Img_Subscribe from '../../images/subscribe.png';





interface Props{

}


const Main:React.FC<Props>=(props:any)=>{
    let [mask,setMask]=React.useState(false); 
    let [nav,setNav]=React.useState({left:'-75%'});
    let [item,setItem]=React.useState('仪表盘');
    let history=useHistory(); //location=> pathname; search; hash; state
    let prefix=useLocation();

    //事件处理函数------------------------------------
    //侧边栏nav及遮罩层
    function handle_nav(e:any) {
        //处理遮罩层
        setMask(!mask);
        //处理边栏nav
        if(nav.left=='-75%'){
            setNav({left:'0'});
        }else{
            setNav({left:'-75%'});
        }
    }




    //组件生命周期
    //componentDidMount
    React.useEffect(() => {
        
    }, [])

    return(
        <div className={style.container}>
            {mask==true?<div onClick={handle_nav} className={style.mask}></div>:''}
            <nav style={nav} className={style.nav}>
                <div className={style.nav_top}>
                    <p className={style.nav_title}>
                        {"Wanted & Selling"}
                    </p>
                    <img src={Img_Back} alt="back" onClick={handle_nav}/>
                </div>
                <div className={style.nav_middle}>
                    <div className={style.group}>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Dashboard} alt=""/>
                            <NavLink to="/main/control" className={style.link} activeClassName={style.active_link} >仪表盘</NavLink>
                        </div>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Note} alt=""/>
                            <NavLink to="/main/manual" className={style.link} activeClassName={style.link} >使用文档</NavLink>
                        </div>
                    </div>
                    <div className={style.group}>
                        <p>订阅</p>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Subscribe} alt=""/>
                            <NavLink to="/main/mysub" className={style.link} activeClassName={style.link} >我的关注</NavLink>
                        </div>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Buy} alt=""/>
                            <NavLink to="/main/theirpub" className={style.link} activeClassName={style.link} >Ta们的新发布</NavLink>
                        </div>
                    </div>
                    <div className={style.group}>
                        <p>物品</p>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Order} alt=""/>
                            <NavLink to="/main/mysub" className={style.link} activeClassName={style.link} >我的发布</NavLink>
                        </div>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Invite} alt=""/>
                            <NavLink to="/main/mywant" className={style.link} activeClassName={style.link} >我的求购</NavLink>
                        </div>
                    </div>
                    <div className={style.group}>
                        <p>用户</p>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Center_2} alt=""/>
                             <NavLink to="/main/center" className={style.link} activeClassName={style.link} >个人中心</NavLink>
                        </div>
                        <div className={style.item}>
                            <img className={style.item_img} src={Img_Book} alt=""/>
                            <NavLink to="/main/history" className={style.link} activeClassName={style.link} >历史记录</NavLink>
                        </div>
                    </div>
                </div>
                <div className={style.version}>
                    {'version 1.0.0'}
                </div>
            </nav>
            <header>
                <div className={style.header_ham}>
                    <img src={Img_Ham} alt="nav" onClick={handle_nav}/>
                </div>
                <div className={style.header_title}>{'仪表盘'}</div>
                <div className={style.header_bar}>
                    <div className={style.bar_language}>
                        <img src={Img_Talk} alt="language"/>
                    </div>
                    <div className={style.bar_center}>
                        <img src={Img_Center} alt="center"/>
                        <div className={style.center_index}></div>
                    </div>
                </div>
            </header>
            <main>
                <Switch>
                    <Route path={`/main/control`} exact component={Control}></Route>
                    <Route path={`/main/manual`} exact component={Manual}></Route>
                    <Route path={`/main/mypub`} exact component={MyPub}></Route>
                    <Route path={`/main/mywant`} exact component={MyWant}></Route>
                    <Route path={`/main/mysub`} exact component={MySub}></Route>
                    <Route path={`/main/theirpub`} exact component={TheirPub}></Route>
                    <Route path={`/main/center`} exact component={Center}></Route>
                    <Route path={`/main/history`} exact component={History}></Route>
                    <Redirect from={'/main'} to={'/main/control'}></Redirect>
                </Switch>
            </main>
        </div>
    )
    
}

export default Main;