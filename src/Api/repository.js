import axios from 'axios';

var url = 'http://localhost:8000/api/v1';

var instance = axios.create({
	baseURL : url,
});

export default instance;