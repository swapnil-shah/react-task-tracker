import PropTypes from 'prop-types';

const Button = ({ name, color, onClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >{name}</button>
  )
}

Button.defaultProps = {
  // name: "Add",
  color: 'grey'
}

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
export default Button
