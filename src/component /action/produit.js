import {updateItems,deleteItems,fetchProduit,AddProduit} from "../request";
import Axios from "axios"
import {  REACT_APP_UPDATE_PRODUIT, REACT_APP_DELETE_PRODUIT,REACT_APP_GET_PRODUIT_FAILED,REACT_APP_GET_PRODUIT, REACT_APP_POST_PRODUIT} from "../action/type"
import axios from "axios";





//get produit
export function allProduit() {
    return dispatch => {
        fetchProduit()
        .then(produit => dispatch (
            {type:REACT_APP_GET_PRODUIT, payload:produit})
            )
   
   .catch(err=> dispatch({
type:  REACT_APP_GET_PRODUIT_FAILED ,
payload : err
   }))
        } 
}


// export const allProduit=()=>async (dispatch)=> {
//     try{
//     const res=await  fetchProduit();
//     dispatch({
//         type: REACT_APP_GET_PRODUIT,
//         payload:res.data
//     })
//     }
//     catch (error) {
//                   console.log(error);
//                  }
//     }


// add produit
export const   AddProduitAdmin=(titre,desc,prix,image) => async (dispatch)=>{
   
   try{
       const res =await   AddProduit(titre,desc,prix,image );
       dispatch({
        type: REACT_APP_POST_PRODUIT, 
        payload : res.data
                            })
      console.log("payload")             
   } 
    catch (error){
console.log(error);
    }
}


export const deleteItem = (id)=> async (dispatch) => {
    try {
      await deleteItems (id);
      dispatch({
        type:REACT_APP_DELETE_PRODUIT,
        payload:id
    })
      console.log("delete")
      dispatch(allProduit);
    } catch (error) {
      console.log(error);
    }
  };


  // update Menu
export const updateItem = (id,titre,desc,prix,image ) => async dispatch => {
    try {
      const res = await updateItems(id,titre,image,desc,prix) 
       
      dispatch({
        type:  REACT_APP_UPDATE_PRODUIT, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };