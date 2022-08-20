import React from 'react'
import Slider from 'react-slick';

import { useContent } from "fusion:content";
import { useFusionContext } from "fusion:context";

import { ThumborrrrrWithFocus } from "../../../imports/thumborrrrr.js";



const SliderGallery = (props) => {

  const { settings, url } = props;  


   // Get site properties
   const { siteProperties } = useFusionContext();

  // Get the content gallery
  const gallery = useContent({
    source: "gallery",
    query: { url: url && url },
    transform(data) {
      if (data && data.content_elements)
      return { list: [...data.content_elements] };
      else 
      return gallery;
      
    },
  });
  
  // if (!data.content_elements)  //fix for problem with content-source_content-api-v4 / when no content_elements
  //   Object.assign(data, { content_elements: [] });
  
  const { list: galleryData = [] } = gallery;
  const array = [...galleryData[0].content_elements]; // array gallery query

  return (
    <div>
       <Slider {...settings}>
                    {array &&
                      array.map((item, index) => {
                        return (
                          <div key={index} className="multislider-image">
                            <a href={item.url} target="_blank">
                              <img
                                width="100%"
                                loading="lazy"
                                src={ThumborrrrrWithFocus(
                                  item.url,
                                  siteProperties.resizer_key,
                                  siteProperties.resizer_url,
                                  item.width,
                                  item.height,
                                  item.additional_properties.focal_point,
                                  true,
                                  "Small"
                                )}
                                alt=""
                              />
                            </a>
                          </div>
                        );
                      })}
                  </Slider>
    </div>
  )
}

export default SliderGallery;