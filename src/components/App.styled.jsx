import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  margin: 20px;
  padding: 20px;

  border: 2px solid black;
  border-radius: 35px;

  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  &:hover {
    background: #753bbd;
    color: white;
    transition: opacity 0.45s ease, transform 0.1s ease;
    transform: scale(1.02);
  }
`;
