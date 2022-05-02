import styled from "styled-components";

export const H1 = styled.h1`
  color: #004616;
  width: 673px;
  margin-left: 30px;
  top: 124px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  @media (max-width: 700px) {
		width: 80%;
	}
`

export const Paragrafo = styled.p`
  width: 1143px;
  margin-left: 22px;
  top: 248px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  @media (max-width: 700px) {
		width: 70%;
	}
`

export const Img = styled.img `
  width: 90%;
  margin: 0 5%;
  @media (max-width: 700px) {
		width: 80%;
	}
`
export const Span = styled.span`
  color: #8CB347;
  font-weight: 600;
  font-size: 20px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 214px;
  margin: 100px 5%;
  background: #91B082;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    background: #004616;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
		width: 80%;
	}
`