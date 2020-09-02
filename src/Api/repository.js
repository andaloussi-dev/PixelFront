import axios from 'axios';

const url = 'http://localhost:8000/api/v1';
const Token=localStorage.getItem('Token');
const instance = axios.create({
	baseURL : url,
	headers : {'Authorization':`Bearer ${Token}`}
});

export default instance;