import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.less';
import {useLocalObservable, useObserver, Observer} from 'mobx-react';

//引入图片
import Ham from '../../images/ham.png';
import Logo from '../../images/logo.png';
import Main_login from '../../images/main_login.jpg';
import Sell from '../../images/sell.png';
import Talk from '../../images/talk.png';
import Wanted from '../../images/wanted.png'

//引入组件

interface Props{

}


const Index:React.FC<Props>=(props)=>{
    // let list_1=React.createRef();

    //事件处理函数
   
    React.useEffect(() => {
        
    }, [])



    return(
        <div className={style.index}>
            <nav className={style.nav}>
                <img className={style.logo} src={Logo}></img>
                <img className={style.ham} src={Ham}></img>
            </nav>
            <div className={style.main}>
                <section className={style.main_login}>
                    <div className={style.login_content}>
                        <h1 className={style.title}>
                            {'做工大最有趣的物品布告栏'}
                        </h1>
                        <div className={style.content}>
                            {' 咱们努力听取用户意见，一步一步完善,在大家的帮助下，咱们越做越好了呢'}
                        </div>
                        <div className={style.bar}>
                            <div className={style.bar_register}><a href={'/register'}>{'立即注册>'}</a></div>
                            <div className={style.bar_login}><a href={'/login'} >{'马上登录>'}</a></div>
                        </div>
                    </div>
                </section>
                <div className={style.main_choose}>
                    <section className={style.intro}>
                            <h2 className={style.intro_title}>{'为什么会诞生这个平台'}</h2>
                            <p className={style.intro_content}>
                                {"给大学生提供一个可以二手交易的平台，以最优质的服务和最优惠的价格，迅速打开大学生校内二手市场，建立学校独家品牌。让二手物品重复利用，充分实现其价值，打造资源节约型，环境友好型社会。"}
                            </p>
                            <ul className={style.intro_example}>
                                <li>{'专注提供工大二手个人物品的信息提供及其校园服务平台'}</li>
                                <li>{'校内的二手交易往往时间短暂，远远无法满足广大学子交易的需求'}</li>
                                <li>{'物美价廉,达到双赢'}</li>
                            </ul>
                            <div className={style.bar_register}>
                                <a href="/register">{'立即注册>'}</a>
                            </div>
                    </section>
                </div>
                <section className={style.main_buy}>
                    <h3 className={style.buy_title}>{'平台功能具有的功能'}</h3>
                    <p className={style.buy_content}>{'用户只要使用学号进行注册登录，无需经过复杂的流程，即可手机拍照上传二手闲置物品达成包括发布个人二手物品和发布求购贴等核心功能。校内交易让闲置的宝贝以最快的速度奔赴新主人手中物尽其用。'}</p>
                    <ul className={style.buy_func}>
                        <li className={style.func_item}>
                            <img src={Sell} alt=""/>
                            <div className={style.item_intro}>
                                <p className={style.intro_title}>{'发布二手物品'}</p>
                                <p className={style.intro_content}>{'无需经过复杂的流程，即可手机拍照上传二手闲置物品'}</p>
                            </div>
                        </li>    
                        <li className={style.func_item}>
                            <img src={Wanted} alt=""/>
                            <div className={style.item_intro}>
                                <p className={style.intro_title}>{'发布物品求购'}</p>
                                <p className={style.intro_content}>{'发布求购贴，告诉大家需要什么'}</p>
                            </div>
                        </li>
                        <li className={style.func_item}>
                            <img src={Talk} alt=""/>
                            <div className={style.item_intro}>
                                <p className={style.intro_title}>{'学生之间的交流'}</p>
                                <p className={style.intro_content}>{'校内交易，安全放心'}</p>
                            </div>
                        </li>    
                    </ul>
                </section>
                <section className={style.main_kinds}></section>
                <div className={style.bottom}>
                    <footer className={style.support}></footer>
                    <div className={style.legal}></div>
                </div>
            </div>
        </div>
    )
    
}

export default Index;