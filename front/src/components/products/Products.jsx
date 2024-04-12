import React from 'react'


import styled from 'styled-components'

import ProductCards from './ProductCard/ProductCards'
import ProductCategories from './ProductCategories/ProductCategories'
import ProductFilterPrice from '../../components/products/ProductFilterPrice/ProductFilterPrice'
import ProductContainer from './ProductContainer'



const Products = ({productos}) => {

  const ContainerFilterCat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 4rem;
  

  
  `
  const GeneralContainerProd = styled.div`
  
  display: flex;
      justify-content: center;
  margin: 0 5rem 0 5rem;
  @media screen and (max-width:1200px ){
        align-items: center;
        flex-direction: column;
      max-width: 900px;
      align-items: center;
      justify-content: center;
    }
  

  
  `

  return (
    <GeneralContainerProd>

      <ContainerFilterCat>
        <ProductCategories/>
        <ProductFilterPrice />
      </ContainerFilterCat>
  
      <ProductCards productos={productos} /> 
    </GeneralContainerProd>
  )
}

export default Products

