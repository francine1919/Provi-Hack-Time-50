import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Paragrafo } from '../Home/styled';
const _ = require("lodash"); 

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

function MapFeatures({ setTooltipContent }) {
  const [ infoAqi, setInfoAqi] = useState(0)

	const getInfoCountry = (name) => {
		axios.get(`https://api.waqi.info/feed/${name}/?token=3e6ace8ad28c53845906f707e073b05407023901`)
    .then((res) => {
      setInfoAqi(res.data.data.aqi)
		})
    .catch((err) => {
      console.log(err.response);
    })
	};

	useEffect(() => {
		getInfoCountry();
	}, []); 


	return (
    <>
    <Paragrafo> O AQI O Índice de Qualidade do Ar nos permite entender os níveis de poluição<br/> atmosférica
      concentradas em ambientes internos e externos e as <br/> propriedades que tornam o ar impróprio,
      ofensivo e danoso à saúde e ao meio ambiente.</Paragrafo>
    <div className="mx-1">
      <ComposableMap data-tip="" projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              
              return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {  
                  getInfoCountry(geo.properties.NAME)                
                  setTooltipContent(`
                  País: ${geo.properties.NAME} |
                  AQI: ${infoAqi}
                  `);
                }}
                
                onMouseLeave={() => setTooltipContent("")}
                fill={'#64cc23'}
                stroke={"black"}

                style={{hover: {
                  fill: infoAqi <= 20 ? '#70c63b' : infoAqi <= 50 ? '#407320' : infoAqi <= 100 ? '#c97a13' : '#940303',
                  outline: "none",
                  cursor: 'pointer'
                }}}
              />
            )})
          }
        </Geographies>
      </ComposableMap>
    </div>
  </>
);
};
export default memo(MapFeatures);