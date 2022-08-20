import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


import HeaderSlider from "./multi-slider/HeaderSlider.jsx";
import FooterSlider from "./multi-slider/FooterSlider.jsx";
import MarcasMultiples from "./multi-slider/MarcasMultiples.jsx";
import SliderGallery from "./multi-slider/SliderGallery.jsx";

import { useAppContext } from "fusion:context";



const NextCustomArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className= { className }
      style={{
        ...style,

        // top: "calc(50% + 5px)",
        // right: "25px",
        // zIndex: "9999", 
     
      }}
      onClick={onClick}
    />
  );
};

const PrevCustomArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
       className= {className}
      style={{

        ...style,
        // top: "calc(50% + 5px)",
        // left: "20px",
        // zIndex: "9999"
      }}
      onClick={onClick}
    />
  );
};



const MultiSlider = (props) => {
  // Get values from the custom fields
  const {
    type,
    logoWidth,
    topLineColor,
    url,
    logo,
    urlTarget,
    slidesToShow,
    slidesToScroll,
    sliderDots,
    titleButton,
    textButton,
    urlButton,
    backgroundColorButton,
    backgroundColorSlider,
    textColorButton,
    bottomLineColor,
  } = props.customFields;

  
  // Initial settings for the slick-slider library
  var set = {
    dots: sliderDots,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ? slidesToShow : 1,
    slidesToScroll: slidesToScroll ? slidesToScroll : 1,
    nextArrow: <NextCustomArrow />,
    prevArrow: <PrevCustomArrow />,

    responsive: [
      {
        breakpoint: 1024,

        settings: {
        
          slidesToShow: 2,
          slidesToScroll: 3,
          dots: sliderDots
    
        }
      },
      {
        breakpoint: 600,
        settings: {
     
          slidesToShow: 2,
          slidesToScroll: 2,
          
  
        }
      },
      {
        breakpoint: 480,
        settings: {
         
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
    ]
  };

  // Get site properties
  // const { siteProperties } = useFusionContext();
   const { arcSite } = useAppContext();
 
  // Array Object Brands
  const marcas = [
    {
      marcaMarca: "tusTiquetes",
      urlMarca:
        "https://cdn.corprensa.com/la-prensa/xml2json/?url=https://www.tustiquetes.com/listado_articulos.xml",
      logoMarca:
        "https://multimedia.corprensa.com/la-prensa/assets/logo_widget_tustiquetes.png"
    },

    {
      marca: "clubPrensa",
      urlMarca:
        "https://cdn.corprensa.com/la-prensa/xml2json/?url=https://cdn.corprensa.com/multimedia/la-prensa/otros/widget_club/listado_articulos.xml",
      logoMarca:
        "https://multimedia.corprensa.com/la-prensa/assets/logo-club-la-prensa.svg"
    },
  ];

  // position random
  const pos = Math.floor(Math.random() * marcas.length);
  const { urlMarca ,  logoMarca } = marcas[pos];

  // config Slider
  const [settings, setSettings] = useState(set);


 
  const calcClass = () => {
    if ( arcSite === "la-prensa" ) 
      return "sliderPrensa"
    
    
     if ( arcSite === "mi-diario" ) 
       return "sliderMidiario"
    
    else 
      return "sliderStyles"

  }


  useEffect(() => {
    
    setSettings(set);
    
  }, [set])
  

  

  return (
   
    <div className = {calcClass()} style = {{ position: "relative" }}>
   
        <HeaderSlider fieldsHeader={{type, topLineColor, urlTarget, logoWidth, logo}} logoMarca={logoMarca} />  
            <div style = {{ backgroundColor : backgroundColorSlider }}>
              
                {type && type === "Slider" && (
                    
                    <SliderGallery settings={settings} url={url} />         
                
                )}


                {type && type === "MarcasMultiples" &&
                  
                    <MarcasMultiples settings={settings} urlMarca={urlMarca} />
                  
                } 
          
                {type && type === "Gallery" && (
                  
                  <h2> Gallery comming soon</h2>
                  
                  )}

            </div>
        <FooterSlider fieldsFooter = {{titleButton, urlButton, textColorButton ,textButton, backgroundColorButton, bottomLineColor}} />
          
    </div>
  );
};


MultiSlider.propTypes = {
  customFields: PropTypes.shape({
    type: PropTypes.oneOf(["Slider", "Gallery", "MarcasMultiples"]),
    logoWidth: PropTypes.number,
    topLineColor: PropTypes.string,
    url: PropTypes.string,
    logo: PropTypes.string,
    urlTarget: PropTypes.string,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    sliderDots: PropTypes.boolean,
    titleButton: PropTypes.string,
    textButton: PropTypes.string,
    urlButton: PropTypes.string,
    backgroundColorButton: PropTypes.string,
    backgroundColorSlider: PropTypes.string,
    textColorButton: PropTypes.string,
    bottomLineColor: PropTypes.string,
  }),
};

export default MultiSlider;
