import Axios from "axios"
import {SERVER_BASE_API,GET_PEODUIT_API,ADD_PEODUIT_API} from "./shared/apiUrl"
//const Api = Axios.create({baseURL:"http://localhost:5001/app"});




// get produit
export const fetchProduit=()=>

Axios.get(GET_PEODUIT_API, {
    Accept: 'application/json',
    'Content-type': 'application/json',
}).then(res=>res.data)



//getMenu
// function fetchProduit() {
//     return Api.get("/allProduit");
//   }

// Add produit

// function AddProduit(titre,image,desc,prix){

//      return Api.post("/addProduit",{titre,image,desc,prix});
//   }


export const  AddProduit=(titre,image,desc,prix)=>
Axios.post(ADD_PEODUIT_API,{titre,image,desc,prix}).then(res=>res.data).then(res=> window.location.reload());    



export const deleteItems=(id)=> {
   Axios.delete(`${SERVER_BASE_API}/${id}/deleteProduit`).then(res=>res.data).then(res=> window.location.reload()) ;
}

export const updateItems=(id,titre,image,desc,prix)=> {
  Axios.put(`${SERVER_BASE_API}/${id}/update`,{titre,image,desc,prix} ).then(res=>res.data).then(res=> window.location.reload());
}


// export {fetchProduit,AddProduit}
// export default {fetchProduit,AddProduit}