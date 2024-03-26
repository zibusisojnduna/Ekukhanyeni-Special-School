function Confirm(){

  let name=document.getElementById("name")
  let email=document.getElementById("email")
  let number=document.getElementById("number")
  let message=document.getElementById("message")



  const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://mail-sender-api1.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de',
    'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
  },
  data: {
    sendto: 'zibusisonduna2001@gmail.com',
    name: '',
    replyTo: 'zibusisonduna2001@gmail.com',
    ishtml: 'false',
    number:'',
    message:'',
  }
};

try {
	const response = axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}


