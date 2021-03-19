import React from "react";
import "./style.scss";
import ProductCard from "../Product/page";
import { navigationItems } from "../../data/navigationItems";
import { productList } from "../../data/productList";
import { generate as uniKey } from "shortid";

function page(props) {
   console.log(navigationItems);
   console.log(productList);
   return (
      <main className='main-products'>
         {navigationItems.map((item) => (
            <section className='product-section' key={uniKey()}>
               <h1 className='foot-type'>{item}</h1>
               {productList.map((product) => (
                  <ProductCard
                     productName={product.name}
                     productImg={product.img}
                     productDescript={product.descript}
                     productPrice={product.price}
                  />
               ))}
            </section>
         ))}
      </main>
   );
}

export default page;
