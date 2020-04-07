/* 
    模拟数据库存储
*/
interface uploadObj  {
    code :Number
    msg:String
}
interface uploadList {
    id:Number
    file_key:String
    file_name:String
}
export = {
    upload(key,name):Promise<uploadObj>{
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve({code:200,msg:'success'})
            }, 100);
        })
    },
    getList():Promise<uploadList[]>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const _list:uploadList[] =[
                    {id:1,file_key:'abc',file_name:'bqc'},
                    {id:1,file_key:'abc',file_name:'bqc'},
                    {id:1,file_key:'abc',file_name:'bqc'},
                ]
                resolve(_list)
            }, 100);
        })
    }
}