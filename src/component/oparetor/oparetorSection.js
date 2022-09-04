import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ul/button/button'
import shortid from 'shortid'

const OparetorSection = ({handleClear,handleAirtimeOps}) => {
   const oparetor =[
    {
      id: shortid.generate(),
      text:"+",
       onClick:()=>handleAirtimeOps('+')
    },
    {
      id:shortid.generate(),
      text:"-",
       onClick:()=>handleAirtimeOps('-')
    },
    {
      id:shortid.generate(),
      text:"*",
       onClick:()=>handleAirtimeOps('*')
    },
    {
      id:shortid.generate(),
      text:"/",
       onClick:()=>handleAirtimeOps('/')
    },
    {
      id:shortid.generate(),
      text:"%",
       onClick:()=>handleAirtimeOps('%')
    },
    {
      id:shortid.generate(),
      text:"**",
       onClick:()=>handleAirtimeOps('**')
    },
    {
      id:shortid.generate(),
      text:"clear",
       onClick:handleClear
    }
   ]
 
 
 
  return (
    <div >
       
    <p>Operator</p>
    <div>{oparetor.map((item)=>
    <Button
    key={item.id}
    text={item.text}
    onClick={item.onClick}
    
    />)}</div>
  </div>
  )
}
OparetorSection.propTypes={
  handleClear:PropTypes.func.isRequired,
  handleAirtimeOps:PropTypes.func.isRequired


}
export default OparetorSection