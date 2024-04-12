import styled from "styled-components";

export const container = styled.div`
    width: 100%;
    height: 100vh;
    margin-left: 10%;
    font-size: 2rem;
    
    
`
 export const Dropdown = styled.div`
    width: 25rem;
    @media screen and (max-width:1200px ){
        width: 10rem;
    }  
`

export const DropdownBtn = styled(Dropdown)`
    padding: 15px 20;
    background-color: white;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`
export const DropdownContent = styled.ul`
    background-color: white;

    
`

export const DropdownItem = styled.li`
    font-size: 2rem;
    padding-left: 6%;
    padding-bottom: 1%;
    list-style: none;
`
export const TextCategories = styled.div`
    padding-left: 4%;
`