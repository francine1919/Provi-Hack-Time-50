import styled from "styled-components";

export const ContainerHeaderLogin = styled.div`
  display: flex;
  height: 80px;
  max-width: 100%;
  justify-content: space-between;
  background-color: #91b082;
  align-items: center;
  top: 0;

  img {
    width: 66px;
    height: 70px;
    margin: 0px 20px;
  }
  @media (max-width: 700px) {
    img {
     display: none;
    }
		width: 100%;
    justify-content: center;
	  }
    p {
      padding: 0 30px;
      width: 100%;
    }
`;

export const ContainerNavigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  margin: 0px 30px;
`;
export const StyledLink = styled.link`
  text-decoration: none;
`;
