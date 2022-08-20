import React from "react";


const HeaderSlider = ( props ) => {
  
  const { type, topLineColor, urlTarget, logoWidth, logo  } = props.fieldsHeader;
  const { logoMarca } = props;

    const calcLogo = () => {
      if (type === "MarcasMultiples") {
        return logoMarca;
      } else return logo;
    };
  

  return (
   
    <div
      className="multislider-logo"
      style={{
        textAlign: "center",
        paddingBottom: "4px",
        borderBottom: topLineColor
          ? `1px solid ${topLineColor}`
          : `1px solid #ae1d1d`,
      }}
    >
      <span
        style={{
          borderBottom: topLineColor
            ? `4px solid ${topLineColor}`
            : "4px solid #ae1d1d",
        }}
      >
        <a href={urlTarget} target="_blank">
          <img
            src={
              calcLogo()
            }
            alt=""
            style={{ 
                    maxWidth : logoWidth 
                          ? logoWidth
                          : "200px" ,
                    maxHeight: "100px" 
                  }}
          />
        </a>
      </span>
    </div>
  );
};

export default HeaderSlider;
