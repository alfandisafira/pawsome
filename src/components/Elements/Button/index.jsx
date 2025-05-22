import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { type, href, borderColor, onClick = () => {} } = props;
  const outerClassName = [props.outerClassName];
  const btnClassName = [props.btnClassName];
  return (
    <div className={`${outerClassName}`}>
      {type == "link" ? (
        <Link
          to={href}
          className={`text-center duration-300 font-medium block ${btnClassName.join(
            " "
          )}`}
        >
          {props.children}
        </Link>
      ) : (
        <button
          className={`text-center rounded-full border border-${borderColor} duration-300 font-medium block ${btnClassName.join(
            " "
          )}`}
          onClick={onClick}
        >
          {props.children}
        </button>
      )}
    </div>
  );
};

Button.defaultProps = {
  outerClassName: "",
  btnClassName: "",
};

Button.propTypes = {
  children: propTypes.any.isRequired,
  type: propTypes.string.isRequired,
  href: propTypes.string,
  borderColor: propTypes.string,
  outerClassName: propTypes.string,
  btnClassName: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
