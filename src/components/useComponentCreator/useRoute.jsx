import React from "react";
import { useParams } from "react-router-dom";
import { generate as uniKey } from "shortid";
import { productList } from "../../data/productList";
import UseProduct from "./useProduct";

const getItemsByCategoryName = (categoryName) => {
   console.log(categoryName);
   console.log(productList.filter((p) => p.category === categoryName) || []);
   if (!categoryName) return productList;

   return productList.filter((p) => p.category === categoryName) || [];
};

function useRoute() {
   let { categoryName } = useParams();
   console.log("categoryName: ", categoryName);

   return (
      <section>
         {getItemsByCategoryName(categoryName).map((product) => (
            <UseProduct
               key={uniKey()}
               productName={product.name}
               productImg={product.img}
               productDescript={product.descript}
               productPrice={product.price}
            />
         ))}
      </section>
   );
}

export default useRoute;
