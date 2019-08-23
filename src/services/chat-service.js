import axios from 'axios';

class ChatService {
  constructor(){
    this.user = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN + '/chat',
      withCredentials: true // Para que viajen tus datos por cookies
    })
  }
  createRoom(user,friend){
    const data = {user,friend};
    console.log(data)
    return this.user.post(`/createroom`, data )
    .then(response=>response)
  }
  loginRoom(room){
    return this.user.get(`/loginroom/${room}`)
    .then(response=>response)
  }
  pushMessage(message,idChat,idUser){
    const data = {message,idChat,idUser};
    return this.user.post(`/postmessage`,data)
    .then(response=>response)
  }
}

const chatService = new ChatService();

export default chatService;