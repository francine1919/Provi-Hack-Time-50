import React from "react";
import { useNavigate } from "react-router-dom";
import BitCoin from '../../Assets/images/BitCoin.png';
import CalCarbono from '../../Assets/images/calCarbono.png';
import Header from "../../Components/Header/Header";
import { Button, H1, Img, Paragrafo, Span } from "./styled";


export default function Home() {
    const navigate = useNavigate();
    const isTokenSet = localStorage.getItem("token");
 

  return (
    <>
      <Header/>
      <H1>O que é Carteira de Carbono</H1>

      <Paragrafo>É uma medida que calcula a emissão de <Span>carbono equivalente </Span> 
        emitida na atmosfera por uma pessoa, atividade, evento, empresa,
        organização ou governo. Muitas atividades rotineiras acabam gerando 
        <Span> emissões atmosféricas</Span> de <Span>gases do efeito estufa</Span> (GEEs). Imagine que
        todos na cidade, no estado, no país e no mundo também fazem atividades
        parecidas… É muita emissão, não é mesmo? Para que se tenha noção das
        quantidades, todos esses gases podem ser convertidos em medidas de carbono
        equivalente, o <Span>dióxido de carbono</Span> equivalente (CO2eq). Quando mensuramos
        a quantidade de carbono equivalente emitida na atmosfera temos a carbon
        footprint de uma determinada pessoa, empresa ou atividade. Mas antes de
        sabermos para que ela serve, vamos entendê-la melhor.</Paragrafo>

      <H1>Benefícios</H1>

      <Paragrafo>
      Por meio da carteira de carbono podemos analisar os impactos
      que causamos na atmosfera e as  <Span>mudanças climáticas</Span> provocadas
      pelo lançamento de gases de <Span>efeito estufa</Span> a partir de cada produto,
      processo ou serviço que consumimos. Toda atitude humana traz algum
      impacto para o planeta, por menor que seja, e o modo de vida contemporâneo
      emite muito mais gases do que a Terra é capaz de absorver, ou seja, estamos
      exigindo muito de sua <Span>biocapacidade</Span>.
      <br/><br/>
      Se você come um prato de arroz e feijão, saiba que houve uma carbon
      footprint para essa refeição (plantação, cultivo e transporte). Conhecer
      as nossas emissões de carbono equivalente, direta ou indiretamente, é muito
      importante para reduzi-las com a finalidade de desacelerar o <Span>aquecimento 
      global</Span>, melhorar a qualidade de vida do planeta, reduzir a pegada ecológica 
      e evitar o overshoot, conhecido como a <Span>sobrecarga da Terra</Span>.
      </Paragrafo>

      <H1>Como calcular</H1>
      <Img src={CalCarbono}/>

        <Button onClick={isTokenSet?()=>navigate("/agro/user/wallet"):()=>navigate("/login")}>
          <img src={BitCoin}/>
          Criar carteira
        </Button>
    </>
  );
}
