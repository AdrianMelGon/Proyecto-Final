import axios from 'axios';



class BackRoutes {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:4000/',
      withCredentials: true
    });
  }

  getProgramDataById = (id) => {
    return this.service.get(`/+ ${id}`)
    .then(response => response.data)
  }



  addData = (sexo, edad, estatura, peso, alergias, noMeGusta, primDieta, objetivo) => {
    return this.service.post('/form', {sexo, edad, estatura, peso, alergias, noMeGusta, primDieta, objetivo})
    .then(response => response.data)
  }
  
  getData = () => {
    return this.service.get('/getData')
    .then(response => response.data)
  }

  postEdit = (name, description, duration, popularity, fee, id) => {
    //QUITADO PICTURE
    console.log(name)
    return this.service.post(`/postedit/${id}`, {name, description, duration, popularity, fee})
    .then(response => response.data)
  }

  deleteProgram = (id) => {
    console.log(id)
    return this.service.delete(`/deleteprogram/${id}`)
    .then(response => response.data)
  }


}


export default BackRoutes;