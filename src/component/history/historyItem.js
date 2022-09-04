import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../ul/button/button'

const HistoryItem = ({historyItem,disabled,handleRestore})=> {
 
  const [show, setShow] = useState(false)
  const handToggle =()=>{
    setShow(!show)
  }
 
 
 
  return (
         <li key={historyItem.id}>
          <div>
          <p>operation : {historyItem.inputs.a} {historyItem.operator} {historyItem.inputs.b}result:{historyItem.result} </p>
            <Button
            text={show ? 'hide' : "show"}
            onClick={handToggle}
            />
          </div>
           {show &&(
            <>
            <small>{historyItem.date.toLocaleDateString()}</small>
          
          <Button
            text='Restore'
            onClick={()=>handleRestore(historyItem)}
            disabled={disabled}
          />
        </>
           )}
            
          </li>

  )
}

HistoryItem.propTypes={
    historyItem:PropTypes.shape({
        id:PropTypes.number.isRequired,
        inputs:PropTypes.shape({
            a:PropTypes.number.isRequired,
            b:PropTypes.number.isRequired
        }).isRequired,
        operator: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
        result: PropTypes.number.isRequired,
    }),
    disabled:PropTypes.bool.isRequired,
    handleRestore:PropTypes.func.isRequired
  
  
  };

  HistoryItem.defaultProps={
    disabled:false
  }

export default HistoryItem