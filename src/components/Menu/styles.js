import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9vh;
    border: 1px solid rgb(25, 37, 61);
    padding-bottom: .8rem;
    font-size: 1.4rem;
    position: fixed;
    background: #333;
    top: 0;
    width: 100vw;
`;

export const Nav = styled.nav`
  display: flex;
  
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  margin: 1.5rem;
  padding: .5rem;
  text-decoration: none;

  &:hover { 
    background: red;
    
  }

`;

