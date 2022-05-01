import React from "react";
import Header from "../../Components/Header/Header";
import Logoabout from "../../Assets/images/logoabout.png"

export default function AboutUsPage() {
  return (
    <div>
      <ContainerHeader>
      <Header/>
      <div>AboutUsPage</div>
      </ContainerHeader>

      <img src={logoabout} alt=""/>
      <h1>Somos um grupo de 7 entusiastas emprol da preservação ambiental. </h1>
      <p>Através do Hackathon da Provi, fomos desafiados a influenciar e, quem sabe até mudar 
        o cenário ambiental atual através da tecnologia.</p>
      <p>Assim nasceu a Pegada verde, afim de aproximar pessoas que podem ajudar a mudar o cenário ambiental 
        e ainda ajudar na renda de produtores rurais e proprietários de veículos elétricos.</p>
      
      <h2>Nós te ajudamos a reduzir a sua pegada de carbono!</h2>
      
      <h1>A equipe</h1>
      <div>

        
      </div>
   
    </div>

  );
}
