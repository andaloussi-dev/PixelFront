import {login} from '../Api/Index';

export const authValidation=async (data)=>{

    try {
       const res= await login(data)
       return {data:res.data,status:true};
    } catch (err) {
        return  {status:false,message:err.response.data.message};
    }
}

