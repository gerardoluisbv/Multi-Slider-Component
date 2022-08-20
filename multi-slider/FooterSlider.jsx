import React from "react";

const FooterSlider = (props) => {
  const {
    titleButton,
    urlButton,
    textColorButton,
    textButton,
    backgroundColorButton,
    bottomLineColor,
  } = props.fieldsFooter;

  return (
    <div>
      {titleButton && titleButton && (
        <div className="multislider-footer">
          <p
            className="multislider-title-button"
          >
            {titleButton}
          </p>
          <a
            href={urlButton ? urlButton : "#"}
            >
              <button
              className="multislider-button-link"
              style={{
                color: textColorButton ? textColorButton : "black",
                backgroundColor: backgroundColorButton
                  ? backgroundColorButton
                  : "#E12248"
              }}>

                  {textButton && textButton}
              </button>
          </a>
        </div>
      )}

      <div
        className="lineBottom"
        style={{
          borderBottom: bottomLineColor
            ? `1px solid ${bottomLineColor}`
            : `1px solid #E12248`,
        }}
      ></div>
    </div>
  );
};

export default FooterSlider;
