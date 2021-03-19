import React from "react";
import "./style.scss";
import { navigationItems } from "../../data/navigationItems";
import { generate as uniKey } from "shortid";

function page(props) {
   console.log(navigationItems);
   return (
      <header className='header'>
         <nav className='header__nav'>
            <a className='header__logo' href='#'>
               <img
                  src='https://static8.depositphotos.com/1143769/925/v/600/depositphotos_9259005-stock-illustration-its-bbq-grilling-time.jpg'
                  alt=''
               />
            </a>
            <ul className='header__ul'>
               {navigationItems.map((item) => (
                  <li className='nav-item' key={uniKey()}>
                     <a href='#'>{item}</a>
                  </li>
               ))}
            </ul>
            <div className='toggle-menu'>
               <div className='toggle-menu__bar'></div>
            </div>
         </nav>
      </header>
   );
}

export default page;
