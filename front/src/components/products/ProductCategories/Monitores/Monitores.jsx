
import ProductCards from '../../ProductCard/ProductCards'
import ProductCategories from '../../ProductCategories/ProductCategories'
import ProductFilterPrice from '../../ProductFilterPrice/ProductFilterPrice'
import styled from 'styled-components'

const Monitores = ({productos}) => {

    
        const ContainerFilterCat = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        `
        const GeneralContainerProd = styled.div`
        display: flex;
        justify-content: center;
        `


  return (
    <div>    
    <GeneralContainerProd>
    <ContainerFilterCat>
    <ProductCategories/>
    <ProductFilterPrice />
    </ContainerFilterCat>
    <ProductCards productos={productos} /> 
  </GeneralContainerProd>
  
  </div>
  )
}

export default Monitores