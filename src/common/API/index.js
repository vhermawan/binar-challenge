import axios from 'axios';

const API_URL = process.env.API_URL

export const API = {
  get : async function (endPoint) {      
    return await axios.get(API_URL + endPoint)
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },
}