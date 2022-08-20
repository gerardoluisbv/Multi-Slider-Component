import React from "react";
import Slider from "react-slick";
import { Spinner } from "./Spinner.jsx";

import useFetchXmltoJson from "./useFetchXmltoJson.js";


const MarcasMultiples = (props) => {

  
  const { settings, urlMarca } = props;  
  
  //hook: get the content extern with fetch to XML -> JSON tranform 
  const { data:data, loading } = useFetchXmltoJson( urlMarca );


    return (

        
        <div>
            {loading && <Spinner />} 
            
            <Slider {...settings}>
            {data &&
                data.map((item, index) => {
                return (
                    <div key={index} className="multislider-image">
                    <a
                        href={item.url && item.url.length > 0 && item.url}
                        target="_blank"
                    >
                        <img
                        width="100%"
                        loading="lazy"
                        src={item.imagen}
                        alt={item.titulo && item.titulo.length > 0 && item.titulo}
                        />
                 
                        { item.titulo && item.titulo.length > 0 && item.titulo &&
                            <section
                                style = {{
                                    paddingTop : "5px"
                                }}   
                            >      
                                <small>
                                <b>{item.titulo}</b> <br/>
                                {item.fecha && item.fecha.length > 0 && item.fecha}
                                </small>
                            </section>
                        }
                    </a>
                    </div>
                );
                })}
            </Slider>
        </div>
    );
};

export default MarcasMultiples;
