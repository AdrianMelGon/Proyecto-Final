import axios from 'axios';

class BackRoutes {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/',
      withCredentials: true
    });
  }

  addData = (edad, estatura, peso) => {
    return this.service.post('/form', {edad, estatura, peso})
    .then(response => response.data)
  }

}

export default BackRoutes;