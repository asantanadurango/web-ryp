import React from 'react';
import { useParams } from 'react-router-dom';
import { generate as uniKey } from 'shortid';
import { productList } from '../../data/productList';
import Product from '../Product/page';
import './style.scss';

const getItemsByCategoryName = categoryName => {
	if (!categoryName) return productList;
	if (categoryName === 'web-ryp') return productList;
	return productList.filter(p => p.category === categoryName) || [];
};

function Main() {
	let { categoryName } = useParams();
	return (
		<main className='main-products'>
			<section className='product-section'>
				{getItemsByCategoryName(categoryName).map(
					product => (
						<Product
							key={uniKey()}
							productName={
								product.name
							}
							productImg={
								product.img
							}
							productDescript={
								product.descript
							}
							productPrice={
								product.price
							}
						/>
					)
				)}
			</section>
		</main>
	);
}

export default Main;
