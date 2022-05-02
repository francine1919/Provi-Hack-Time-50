import React from "react";
import Header from "../../Components/Header/Header";
import Logoabout from "../../Assets/images/logoabout.png"
import Fran from "../../Assets/images/fran.png"
import Day from "../../Assets/images/day.png"
import Andreyna from "../../Assets/images/andreyna.png"
import Gabis from "../../Assets/images/gabis.png"
import Jean from "../../Assets/images/jean.png"
import Kelly from "../../Assets/images/kelly.png"
import Kevin from "../../Assets/images/kevin.png"
import Frameabout from "../../Assets/images/frameabout.png"
import styles from "./AboutUsPage.module.css"
import { FaLinkedin } from "react-icons/fa";


export default function AboutUsPage() {
  return (
    <div>
      
      <Header/>

      <img   className={styles["logoabout"]} src={Logoabout} alt=""/>
      <h1 className={styles["h1principal"]} >Somos um grupo de 7 entusiastas em prol da preservação ambiental. </h1>
      <p>Através do Hackathon da Provi, fomos desafiados a influenciar <span>e, quem sabe </span>até mudar 
        o <span>cenário ambiental</span> atual através da tecnologia.
      Assim nasceu a Pegada verde, afim de <span>aproximar pessoas</span>  que <span>podem ajudar</span> a mudar o <span>cenário ambiental </span>
        e ainda ajudar na renda de produtores rurais e proprietários de veículos elétricos.</p>
      
      <h2>Nós te ajudamos a reduzir a sua pegada de carbono!
        <img  src={Frameabout}alt=""  className={styles["fameabout"]}  />
      </h2>
      <div>
      <h1  className={styles["equipe"]}>Equipe</h1>
      </div> 
     
      <div className={styles["divlinkedin"]}>

          <div className={styles["divfilho"]}>
               <img src={Fran} alt="" className={styles["divfoto"]}/> 
                 <p className={styles["pfilho"]}>Francine Lima <br/>  FullStack DevFront-End Dev
                 <br/> <FaLinkedin/></p>
          </div>

          <div className={styles["divfilho"]}>
                <img src={Day} alt="" className={styles["divfoto"]} />
                <p  className={styles["pfilho"]}>Dayane Garcia <br/> Front-End Dev 
                <br/> <FaLinkedin/></p>
          </div>

          <div className={styles["divfilho"]}>
                 <img src={Gabis} alt="" className={styles["divfoto"]}/>
                 <p  className={styles["pfilho"]}>Gabriel Gaspar <br/>UX/UI Designer
                 <br/> <FaLinkedin/></p>
          </div>

          <div className={styles["divfilho"]}>
                <img  src={Andreyna} alt="" className={styles["divfoto"]}  />   
                <p  className={styles["pfilho"]}>Andreyna Carvalho <br/>Front-End Dev 
                <br/><FaLinkedin/></p>
         </div>
         <div className={styles["divfilho"]}>
               <img src={Jean} alt=""className={styles["divfoto"]}/> 
               <p  className={styles["pfilho"]}>Jean Spínola <br/> Produto 
               <br/> <FaLinkedin/></p>  
       </div>
       <div className={styles["divfilho"]}>
               <img src={Kelly} alt="" className={styles["divfoto"]} />
               <p  className={styles["pfilho"]}>Kelly Teixeira <br/>Front-End Dev
               <br/><FaLinkedin/></p>
        </div>
        <div className={styles["divfilho"]}>
                <img src={Kevin} alt="" className={styles["divfoto"]} />
                <p  className={styles["pfilho"]}>Kevin Willian <br/>FullStack Dev 
                <br/><FaLinkedin/></p>
       </div>
       </div>
   
    </div>
    

  );
}
