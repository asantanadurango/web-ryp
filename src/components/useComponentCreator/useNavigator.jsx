import React from "react";
import { Link } from "react-router-dom";
import { generate as uniKey } from "shortid";
import { productList } from "../../data/productList";

function useNavigator() {
   const itemtest = "/";
   return (
      <nav>
         <ul>
            <li key={uniKey()}>
               <Link to='/'> {"home".toUpperCase()}</Link>
            </li>
            {getItemsMenu().map((i) => (
               <li key={uniKey()}>
                  <Link to={`${i}`}> {i?.toUpperCase()}</Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}

const getItemsMenu = (_) => [
   ...new Set(productList.map((item) => item.category)),
];

export default useNavigator;
