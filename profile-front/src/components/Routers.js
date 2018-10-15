import axios from 'axios';



class BackRoutes {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/',
      withCredentials: true
    });
  }

  addData = (sexo, edad, estatura, peso, alergias, noMeGusta, primDieta, objetivo) => {
    return this.service.post('/form', {sexo, edad, estatura, peso, alergias, noMeGusta, primDieta, objetivo})
    .then(response => response.data)
  }
  
   getData = () => {
    return this.service.get('/getData')
    .then(response => {console.log(response); return response.data})
  }

}



export default BackRoutes;