import Repository from './repository'
export const login=async data=>{
 return await Repository.post('/user/login',data);
}

export const getAllIssues = async ()=>{
    try {
        const {data} = await Repository.get('/customer/issues');
        console.log(data);
        return data;
    } catch (error) {
        window.location.reload();
        return [];
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