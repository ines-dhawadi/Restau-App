import React from 'react'




function Part2() {
  return(
    <div>
<div class="section-tittle text-center mb-40">
<span>About Our Restaurant</span>
<h2>Book A Table</h2>
</div>
<div class="booking-area section-bg pt-120  pb-130" >
<div class="container">
<div class="row justify-content-center">
<div class="cl-xl-7 col-lg-8 col-md-10">


</div>
</div>
<div class="row justify-content-center">
<div class="col-12">
<form action="#">
<div class="booking-wrap d-flex justify-content-between align-items-center">

<div class="single-select-box mb-30">
<div class="select-this">
<div class="select-itms">
<div class="select-icon">
<i class="ti-user"></i>
</div>

<div class="nice-select" tabindex="0">
    
    
        <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Person 2</option>
    <option value="2">Person 3</option>
    <option value="3">Person 4</option>
  </select>
        

  
        
        </div>
</div>
</div>
</div>


<div class="single-select-box mb-30">
<div class="boking-datepicker">
<div role="wrapper" class="gj-datepicker gj-datepicker-md gj-unselectable"><input type="date" className="form-control cadr-input" placeholder="Date" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/><i class="gj-icon" role="right-icon"> </i></div>
</div>
</div>

<div class="single-select-box mb-30">
<div class="boking-datepicker">
<div role="wrapper" class="gj-timepicker gj-timepicker-md gj-unselectable"><select class="custom-select" id="inputGroupSelect01">
    <option selected>time...</option>
    <option value="1">8-12</option>
    <option value="2">12-18</option>
    <option value="3">18-22</option>
  </select><i class="gj-icon clock" role="right-icon"></i></div>
</div>
</div>

<div class="single-select-box mb-30">
<button class="btn select-btn">Book Now</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>


    </div>
   )

 }

export default Part2