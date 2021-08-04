import React from 'react'
import "./css/card.css"
import  {useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux';
import {deleteItem,allProduit} from "./action/produit"
import UpdateItem from "./updateProduit"


  
   const GetProduitt=()=>{

    const produit = useSelector(state =>state.produitStore.datas)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( allProduit());
  },[]);
  console.log("produit", produit )




   //DeleteMenu
   const deleteItemm =(id)=>{
    dispatch (deleteItem(id) )
    console.log(deleteItem(id))
  }
 
    return(
      <div class="bodyCard">
    <div id="cardStyle">
         
     
{produit.map((el,key)=>(

<div >
  {/* <h1>{el.titre}</h1>
  <h1>{el.desc}</h1>
  <h1>{el.prix}</h1> */}



<div class="card" key={key}>
  <div class="img-avatar">
{/* <img className="card-logo " src='images/logo.webp'/> */}

  </div>
  <div class="card-text">
    <div class="portada" >
    <img class="portada"  src={el.image}/>
    </div>
    <div class="title-total">   
      <div class="title">Ant Munu</div>
      <h2>{el.titre}</h2>
  
  <div class="desc">{el.desc}</div>
  <div class="actions">
    <button><i class="far fa-heart"></i></button>
    <button onClick={() => deleteItemm(el._id)}><i class="far fa-trash-alt"></i> </button>

< UpdateItem id={el._id}  el={el}/>

  
    
    {/* <button><i class="far fa-envelope"></i></button>
    <button><i class="fas fa-user-friends"></i></button> */}
  </div></div>
 
  </div>
  
 
  
</div>


  
</div>



/* End  card test */

))

}  


    </div>
    </div> )

 }

export default GetProduitt