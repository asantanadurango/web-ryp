import React from 'react';
import './style.scss';

function Product({ productImg, productName, productDescript, productPrice }) {
	return (
		<li className='product'>
			<div className='product__imgBox'>
				<img
					className='product__img'
					src={productImg}
					alt={productName}
				/>
			</div>

			<div className='product__body'>
				<h2 className='product__title'>{productName}</h2>

				<p className='product__descript'>
					{productDescript}{' '}
				</p>

				<p className='product__price-section'>
					<span>
						Valor:{' '}
						{'$'.repeat(productPrice)}
					</span>
					<button>
						<span>Ordenar</span>
					</button>
				</p>
			</div>
		</li>
	);
}

export default Product;
