import React from 'react'
import "../css/home.css"
import  Navb from "./navbar"
import Servec from './servec'
import Part from  './part1'
import Part2 from "./part2"
import  Part3 from "./part3"



function Homme() {
  return(
    <div>

      {/* start navbard */}
      < Navb />
<div>
    {/* /******* start part 1   ******* */}
   <div className="part1">
     {/* <img src="/images/img2.png" alt=""/> */}

     <div class="hero__caption">
<span data-animation="fadeInLeft" data-delay=".2s" class="spann" >Discover Your Teste</span>
<h1 data-animation="fadeInLeft" data-delay=".4s" class="textp1" >We belive good food offer great smile</h1>
<p data-animation="fadeInLeft" data-delay=".6s" class="" >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>

<div class="hero__btn">
<button className="buttonC">Resurvation</button>
</div>
</div>
   </div>
{/* *************END part 2 */}
</div>



<Servec />
<Part/>
<Part2 />
< Part3 />
    </div>
   )

 }

export default Homme