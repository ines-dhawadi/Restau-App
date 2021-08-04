import { createStore ,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import {produitReducer} from "../reducer/produit";

const Reducers = combineReducers({

  produitStore :produitReducer 

 })

const store =   createStore(Reducers,applyMiddleware(thunk));
  export default store







  



//import {rootReducer} from '../reducer/index'

// const middleWare = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(...middleWare))
//   );
// export default store ;