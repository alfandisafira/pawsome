import React from "react";
import propTypes from "prop-types";

const BoxImage = (props) => {
  const { borderRadius, bgColor } = props;
  const className = [props.className].join(" ");
  return (
    <div
      className={`${borderRadius} ${bgColor} ${className} flex justify-center`}
    >
      {props.children}
    </div>
  );
};

BoxImage.defaultProps = {
  borderRadius: "rounded-lg",
  bgColor: "bg-gradient-to-br from-amber-300 via-amber-300 to-orange-400",
};

BoxImage.propTypes = {
  borderRadius: propTypes.string,
  bgColor: propTypes.string,
  children: propTypes.any.isRequired,
};

export default BoxImage;
