import Repository from './repository'
export const login=async data=>{
 return await Repository.post('/user/login',data);
}

export const getAllIssues = async ()=>{
    try {
        console.log(localStorage.getItem('User'));
        const {data} = await Repository.get('/customer/issues');
        return data;
    } catch (error) {
        
    }
}


export const createIssue =async(data)=>{
    try {
        await Repository.post('/customer/create',data);
    } catch (error) {
        
    }
}

export const getIssueById= async id=>{
    try {
       const {data}= await Repository.get(`/customer/issue/${id}`);
       return data;
    } catch (error) {
        
    }
}

export const deleteIssue= async id=>{
    try {
       const {data}= await Repository.delete(`/customer/issue/${id}`);
       return data;
    } catch (error) {
        
    }
}