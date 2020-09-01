import Repository from './repository'
export const login=async data=>{
 return await Repository.post('/user/login',data);
}