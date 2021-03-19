import React from "react";

function useProduct({
   productImg,
   productName,
   productDescript,
   productPrice,
}) {
   return (
      <li className='product'>
         <div className='product__link'>
            <img className='product__img' src={productImg} alt={productName} />
         </div>

         <h2 className='product__title'>{productName}</h2>

         <p className='product__descript'>{productDescript} </p>

         <p>Valor: {productPrice}</p>
      </li>
   );
}

export default useProduct;
