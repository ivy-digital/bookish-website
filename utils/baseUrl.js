const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.infomatao.com.br/api' 
: 'http://localhost:8080';

export default baseUrl;
