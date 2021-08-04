
import { REACT_APP_DELETE_PRODUIT,REACT_APP_GET_PRODUIT, REACT_APP_POST_PRODUIT} from "../action/type";

const newProduit =  {
    datas : []

  }


  //get
// const produit =[]

// export const produitReducer =(state = produit, action)=>{
//    switch(action.type) {
//        case "GET_PRODUIT_SUCCEDED":
//            return action.payload
           
//    }

//    return state 
// };





  export const produitReducer=(state = newProduit, action)=>{
     const {type,payload}= action;
    
    switch(type){
      case  REACT_APP_GET_PRODUIT:
  return {
    ...state,
    datas: payload,
  
  };

          case  REACT_APP_POST_PRODUIT:
              return{
                  ...state,
                  datas:[ ...state.datas, payload]
              };
              case REACT_APP_DELETE_PRODUIT:
                return {
                  ...state,
                  datas: state.datas.filter(
                    data => data._id !== payload
                  )
                };
                  
  }
  console.log('inchallah labes si ali', state)
  return state
  
  };


  // mthd2
//   export const productReducer = (state = product, action) => {
//     switch(action.type) {
//         case "GET_PRODUCT_SUCCEDED":
//             return action.payload;
//         case "ADD_PRODUCT_SUCCEDED":
//             const product = state.product.concat(action.playload)
//             return {...state, product}
//         default:
//             return state;
//     }
// return state
// }