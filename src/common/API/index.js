import axios from 'axios';

export const API = {
  get : async function (endPoint) {   
    let headers = {}
    headers.Access_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODA5NDk0MH0.RA4WX_Tvd6TzI3TkDWxi7v0yj8DAore6e22k37-_HJ0`   
    return await axios.get('https://api-car-rental.binaracademy.org/' + endPoint,  { headers: headers })
    .then(response => {
      return response;
    }).catch(error => {
      throw error.response;
    });
  },
}
