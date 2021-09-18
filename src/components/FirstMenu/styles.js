import styled from 'styled-components'

export const Container = styled.div`
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