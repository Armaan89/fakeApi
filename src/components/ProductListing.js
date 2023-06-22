import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state)=>state);
   
        const dispatch = useDispatch();


    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
        console.log("Err", error);
        });
        console.log(response.data);
        dispatch(setProducts(response.data));
    }
useEffect(()=>{
fetchProducts();
},[]);
console.log(products);
 
  return (
    <div className='ui grid contianer' style={{marginTop:'10px'}}>
        <ProductComponent/>
    </div>
  )
}

export default ProductListing;