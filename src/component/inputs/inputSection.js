import React from 'react'
import PropTypes from 'prop-types'
import TextFiled from '../ul/textFiled'
import './inputSection.scss'

const InputSection = ({inputs,handleInputChange}) => {
  return (
    <div className='inputs'>
        <h3> Inputs</h3>
        <TextFiled
        value={inputs.a}
        onChange={handleInputChange}
        name="a"
        />
        <TextFiled
        value={inputs.b}
        onChange={handleInputChange}
        name="b"
        />
    </div>
  )
}
InputSection.propTypes={
    inputs:PropTypes.shape(
        {a:PropTypes.number.isRequired,
        b:PropTypes.number.isRequired}).isRequired,

        handleInputChange:PropTypes.func.isRequired
  
  }

export default InputSection