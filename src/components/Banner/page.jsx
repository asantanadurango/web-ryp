import React from "react";
import "./style.scss";

function Banner() {
   return (
      <section className='banner'>
         <div className='banner__boxImg'>
            <img
               className='banner__img'
               src='https://i.pinimg.com/originals/cd/b2/3f/cdb23f9f28862aa79af4de97e0bf250b.jpg'
               alt='img presentation'
            />
         </div>
      </section>
   );
}

export default Banner;
