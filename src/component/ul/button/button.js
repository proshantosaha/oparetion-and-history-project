import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = ({text,onClick,disabled,}) => {
  return (
    <>
    <button
    className='button'
     onClick={onClick} 
    //  disabled={disabled}
     
     >
        {text}
    </button>
    </>
  )
}

Button.propTypes={
  text:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired,
  disabled:PropTypes.bool,

}

export default Button