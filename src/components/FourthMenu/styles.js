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

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContainerImage = styled.div`
  margin: 1.5rem;
`;

export const ContainerButton = styled.div`
  margin: 1.5rem;
  padding: 0.5rem;
  
  &:hover {
    background: red;
    
  }
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