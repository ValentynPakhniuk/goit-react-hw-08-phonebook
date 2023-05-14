import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  border: 1px solid black;

  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
  }

  & Button {
    width: 100px;
  }
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px;

  & div {
    display: flex;
    flex-direction: column;
  }
`;
