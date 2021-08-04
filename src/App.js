
import './App.css';
import AdminDash from './component /AdminDash';
 import  Homme  from './component /pages/home';
import React, { Component }  from 'react';
 import FormAjoutAdmin from './component /FormAjoutAdmin'
 import GetProduitt from "./component /getProduitss";
 import {BrowserRouter as Router,Route  } from "react-router-dom";
import GetProdFrant  from './component /getClient'

function App() {
  return (
    <div className="App">
<Router>
<Route exact path='/'><Homme /> </Route>
<Route path='/Munue'>< GetProdFrant  /></Route>
<Route path='/'></Route>
<Route path="/dashboard.html"><AdminDash /></Route>
</Router>



       {/* <GetProduitt/>
       {/* <Homme /> */}
       {/* <FormAjoutAdmin />  */}
<div >


</div>
    </div>
  );
}

export default App;
