import styled from "styled-components";
export const ContainerCreateWallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  width: 100%;
  height: 480px;
  color: #004616;
  font-size: 20px;
`;
export const ContainerInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 8px;
  border-color: #8cb347;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    margin: 40px;
    background-color: #8cb347;
    color: white;
    border-radius: 8px;
    width: 110px;
    height: 36px;
    :hover {
      background-color: #004616;
    }
  }
`;

export const ContainerHr = styled.div`
  margin-top: 28px;
  margin-bottom: 20px;
  height: 0px;
  width: 300px;
  border: 2px solid #004616;
`;

export const ContainerLoginOnline = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;
