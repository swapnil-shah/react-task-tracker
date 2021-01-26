import PropTypes from 'prop-types';

import Button from './Button'

const Header = ({ title }) => {
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button text="Add" color="green" onClick={handleClick} />
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string
}

export default Header
