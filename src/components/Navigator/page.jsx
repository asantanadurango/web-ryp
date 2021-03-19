import React from "react";
import { Link } from "react-router-dom";
import { generate as uniKey } from "shortid";
import { productList } from "../../data/productList";
import "./style.scss";

import LOGO from "../../assets/logo.jpeg";

function page() {
   return (
      <header className='header'>
         <nav className='header__nav'>
            <a className='header__logo'>
               <img src={LOGO} alt='' />
            </a>

            <ul className='header__ul'>
               <li key={uniKey()}>
                  <Link className='nav-item' to='/'>
                     {"home".toUpperCase()}
                  </Link>
               </li>
               {getItemsMenu().map((i) => (
                  <li key={uniKey()}>
                     <Link className='nav-item' to={`${i}`}>
                        {i?.toUpperCase()}
                     </Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

const getItemsMenu = (_) => [
   ...new Set(productList.map((item) => item.category)),
];

export default page;
