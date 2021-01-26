import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >{text}</button>
  )
}

Button.defaultProps = {
  text: "Add",
  color: 'grey'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
export default Button
