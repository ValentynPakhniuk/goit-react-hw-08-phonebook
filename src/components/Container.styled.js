import styled from 'styled-components';

export const ContainerContacts = styled.div`
  width: 400px;
  margin: auto;
`;

export const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    font-weight: 500px;
    font-size: 48px;
    text-align: center;
  }
`;
export const ContainerLayout = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 0 16px;
`;
