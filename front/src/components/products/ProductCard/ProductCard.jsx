import React from 'react'
import styled from 'styled-components'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({key, id, name, status, image, precio, descripcion, nombre}) => {
    const CardContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: #ffff;
    border-bottom:  .1563rem solid#2d2d2d7e;
    border-radius: .075rem;
    box-shadow: -0.125rem .125rem .125rem -0.125rem rgba(0, 0, 0, 0.492) inset;
    -webkit-box-shadow: -0.1875rem .1875rem .1875rem -0.1875rem rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -0.125rem .0625rem .125rem -0.0625rem rgba(0,0,0,0.75) inset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.25rem .125rem 1.25rem 0;
    padding: .3125rem;
    max-width: 860px;
    @media screen and (max-width:1200px ){
        align-items: center;
        flex-direction: column;
      
      max-width: 500px;
    }
  `;


const CardImg = styled.img`
width: 10rem;
@media screen and (max-width:1200px ){
    width: 7rem;
    }
`;

const Cardbody = styled.div`
padding: .8125rem;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: .625rem;

`;

const ProductDescription = styled.span`
font-family: Arial, Helvetica, sans-serif;
text-align: left;
letter-spacing: 0.13rem;
text-overflow: ellipsis;
color: #333;
font-size: 1.2125rem;
line-height: 1rem;
@media screen and (max-width:1200px ){
    font-size: 1.2rem;
    
    }




`;

const ProductPrice = styled.div`
    font-size: 2rem;
    letter-spacing: 3px;


`;

const ProductshopcartContaier = styled.div`
display:flex;
justify-content:start;
align-items: center;
`;

const Productshopcart = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #2165f7;
color: #ffff;
cursor: pointer;
width: 18.3125rem;
height: 2.25rem;
border-radius: 4px;

`;

const ProductshopcartDescription = styled.span`
    font-size: 10px;
`


//Function MercadoPago

const Mercadopago = () => {
    const url = 'http://localhost:3001/pagos';
const data = {
  id: id,
  nombre: nombre,
  precio:  precio,
  cantidad: 1
};

axios.post(url, data)
  .then(response => {
    const paymentLink = response.data.paymentLink;
    console.log('Respuesta del servidor:', response.data);

    setTimeout(() => {
        window.open(response.data, '_blank');
      }, 150);
  })
  .catch(error => {
    console.log(error);});
}




  return (
    <div>
        <CardContainer>
            <Link to={`/productdetail/${id}`}>
            <CardImg  src={`${image}`}></CardImg>
            </Link>
            <Cardbody>
            <Link to={`/productdetail/${id}`}>
                <h2>
                    {
                        nombre
                    }
                </h2>
                </Link >
                <ProductDescription>
                    {
                        descripcion
                    }
                </ProductDescription>
                <ProductPrice>
                $
                {
                    precio
                }
                </ProductPrice>
                <ProductshopcartContaier>
                <Productshopcart onClick={Mercadopago}>
                    Comprar
                </Productshopcart>
                <TiShoppingCart size="3.24rem" />
                </ProductshopcartContaier>
            </Cardbody>
        </CardContainer>
    </div>
  )
}

export default ProductCard