import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import styled from 'styled-components'
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const misparams = useParams();
  console.log("Este es mi params",misparams)
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/productos/${id}`).then(
      ({ data }) => {
        if (data) {
          setProduct(data);
        } else {
          window.alert('No hay productos con ese ID');
        }
      }).catch(error => {
        console.error('Error fetching product data:', error);
      });

    return () => setProduct({});
  }, [id]);

  const DetailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const ImgDetailContainer = styled.img`
    width: 456px;
    height: 408px;
    margin-right: 20px; /* Adjust as needed */
  `;

  const DetailDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 546px;
    height: 408px;
    font-size: 24px;
  `;

  const DetailDescription = styled.div`
    width: 486px;
    height: 96px;
    margin: 0 20px;
  `;

  const DetailPrice = styled.div`
    width: max-content;
    height: 40px;
    margin: 0 20px;
    font-size: 32px;
  `;

  const SumarCarritoBox = styled.div`
    display: flex;
  `;

  const SumarCarrito = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fd611a;
    border-radius: 6px;
    width: 280px;
    padding: 0 16px;
    height: 40px;
    margin: 0 20px;
    color: #fff;
    cursor: pointer;
  `;

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
    <DetailContainer>
      <ImgDetailContainer src={product.url_imagen} alt={product.nombre} />
      <DetailDescriptionContainer>
        <DetailDescription>
          {product.nombre}
        </DetailDescription>
        <DetailPrice>${product.precio}</DetailPrice>
        <SumarCarritoBox>
          <SumarCarrito onClick={Mercadopago}>Comprar</SumarCarrito>
          
          <TiShoppingCart size="3.24rem" />
        </SumarCarritoBox>
      </DetailDescriptionContainer>
    </DetailContainer>
  );
}

export default ProductDetail;