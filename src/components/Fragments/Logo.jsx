import React from "react";
import propTypes from "prop-types";

import imageSource from "../../../src/assets/images/petslogo.png";

const Logo = (props) => {
  const { textLogo } = props;
  const imageClassName = [props.imageClassName];
  const textClassName = [props.textClassName];
  return (
    <div className="justify-start items-center gap-0.5 inline-flex cursor-default">
      <img
        src={imageSource}
        alt="Logo"
        className={`${imageClassName.join(" ")} relative`}
      />
      <h4 className={`${textClassName.join(" ")} font-semibold text-primary`}>
        {textLogo}
      </h4>
    </div>
  );
};

Logo.propTypes = {
  imageClassName: propTypes.string,
  textClassName: propTypes.string,
  textLogo: propTypes.string,
};

export default Logo;
