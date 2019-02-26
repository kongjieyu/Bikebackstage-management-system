import JsonP from 'jsonp'

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
}