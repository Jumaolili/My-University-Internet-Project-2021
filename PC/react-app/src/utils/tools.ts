let Tools = {
    stragegyFactory:function(checkList:any[]){    //检查策略组工厂
        let output:any=[];
        let index=1;
        if(!Array.isArray(checkList)){
            output.push({
                status:false,
                msg:'策略组checkList参数需要为数组'
            });
            return output;
        }
        for(let i in checkList){
            //分离策略组，策略和结果
            //执行每个策略组
            let check=checkList[i];
            if(!Array.isArray(check)){
                output.push({
                    status:false,
                    msg:'策略组checkList中每一项需要为数组[fn,...args,失败语句]'
                });
                return output;
            }
            let fn=check[0];
            let replace_msg=check[check.length-1];
            let result;
            let args;
            if(typeof fn !== 'function') {
                output.push({
                    status:false,
                    msg:`策略组第${index}项[fn,...args，失败语句],fn必须为函数`
                });
                return output;
            }
            if(replace_msg.fail_msg){
                replace_msg=check.pop();
            }
            args=Array.prototype.slice.call(check,1)
            result=fn(...args);   
            if(typeof result == 'boolean'){
                let bool = result;
                result = {
                    status: bool,
                    msg:bool ? '' : (replace_msg?replace_msg.fail_msg:`第${index}个策略没有通过`)
                }
            }
            output.push(result);
            index++;
        }
        return output
    },
    isEmail:function(email:string) {
        //判断这个文本框中输入的是不是邮箱
        let reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
        if (reg.test(email.trim())){
            return true;
        }else{
            return false;
        }
    },
    checkInput:function(input:any){  //检查注册输入
        //过滤
        //检测是否符合要求
        //不符合：返回false和错误类型  
        //符合，返回true
        let error=[];
        let email=input.email.trim().replace(' ','');
        let emailType=input.emailType.trim().replace(' ','');
        let loginCode=input.loginCode.trim().replace(' ','');
        let password=input.password.trim().replace(' ','');
        let rePassword=input.rePassword.trim().replace(' ','');
        let invite=input.invite.trim().replace(' ','');
    },
    checkLogin:function(input:any){ //检查登录输入
        //过滤
        //检测 账号 和 密码 是否符合规则
        //返回错误信息
        let {email,password} = input;
        
        email.trim().replace(' ','');
        password.trim().replace(' ','');
        let strategies=[
            //写策略的地方
            
            [Tools.isEmail,email,{fail_msg:'邮箱不得为空或格式错误'}],
            [function(str:string){                
                if(str.length==0){
                    return {
                        status:false,
                        msg:'密码不能为空'
                    }
                }else{
                    return {
                        status:true,
                        msg:''
                    }
                }
            },password]
        ]
        //将策略导入策略工厂
        let result:any = Tools.stragegyFactory(strategies);
        //错误信息处理
        return result;
    },
    encodeFormat:function(data:any){   //url转码
        let result="?";
        let keys=Object.keys(data);
        if(Object.keys.length==0) return '';
        for(let i=0;i<keys.length;i++){
            result+=encodeURIComponent(keys[i]+'='+data[keys[i]])
            if(i!=keys.length-1){
                result+='&'
            }
        }
        return result;
    },
    throttle:function(fn:any,wait:number){  //函数节流化
        let timer:any=null;
        let firstTime:boolean=true;
        return function(){
            if(firstTime){
                fn();
                firstTime=false;
                return
            }
            if(timer){
                return
            }
            timer = setTimeout(() => {
                fn();
                clearTimeout(timer);
                timer=null;
            }, wait);
        }
    }

}

export default Tools;