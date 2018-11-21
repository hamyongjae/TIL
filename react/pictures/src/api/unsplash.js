import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { 
    Authorization: "Client-ID 47f792c1754ce46c06d8de947f61897d1089a57cd9ea4ac82e94fb8a443dc59b" 
  }
});