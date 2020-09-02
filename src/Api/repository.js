import axios from 'axios';

var url = 'http://localhost:8000/api/v1';
const Token=localStorage.getItem('Token');
var instance = axios.create({
	baseURL : url,
	headers : {'Authorization':`Bearer ${Token}`}
});

export default instance;