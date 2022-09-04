import React from 'react'
import './textFileld.scss'
import PropTypes from 'prop-types'

const TextFiled = ({value,onChange,name}) => {
  return (
    <>
        <input
         className='inputs'
         type="number"
         value={value}
         onChange={onChange}
         name={name}
         />
    </>
  )
}

TextFiled.propTypes={
    value:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired

}
export default TextFiled