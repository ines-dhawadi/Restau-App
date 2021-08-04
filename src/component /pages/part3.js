import React from 'react'
import {Carousel} from 'react-bootstrap'

function Part3() {
  return(
    <div>
<div class="section-tittle text-center mb-70">
<span>Our Offerd Menu</span>
<h2>Some Trendy And Popular Courses Offerd</h2>
</div>
{/* ***** START CAROSEL */}
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100"
      src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/xgallery1.png.pagespeed.ic.fRWo3BzcVg.webp"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100"
      src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/xgallery2.png.pagespeed.ic.YrD7lScHJo.webp"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100"
      src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/xgallery4.png.pagespeed.ic.ice2Epe0ES.webp"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>

{/* ************  END CAROSEL */}
    </div>
   )

 }

export default  Part3