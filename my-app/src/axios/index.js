import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'


export default class Axios{
    static jsonp(options){
        return new Promise((resolve, reject)=>{
            JsonP(options.url, {
                param: 'callback'
            }, function(err, response){
                //debugger;
                if(response.cityid){
                    resolve(response)
                    console.log('aaaa')
                }else{
                    reject(response.message)
                    console.log('bbbb')
                }
            })
        })
    }
    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block';
        }
        let baseUrl = 'https://www.easy-mock.com/mock/5c79ce273198586d15fdff04/mockapi'
        return new Promise((resolve, reject)=>{
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseUrl,
                timeout: 5000,
                params: (options.data && options.data.params||'')
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                loading = document.getElementById('ajaxLoading')
                loading.style.display = 'none';
            }
                if(response.status == '200'){
                    let res = response.data;
                    if (res.code == '0'){
                        //将数据抛出
                        resolve(res)
                    } else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}