import styled from "styled-components";

export const ContainerSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  width: 465px;
  height: 480px;
  border-radius: 8px;
  color: #004616;
  border: 1px solid #004616;
  font-size: 20px;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    margin-top: 30px;
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