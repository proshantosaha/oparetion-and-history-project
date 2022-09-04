import React from 'react'
import PropTypes from 'prop-types'
import HistoryItem from './historyItem'
const HistorySection = ({historyList,restoreHistory,handleRestore}) => {
  return (
    <div>
    <p>History</p>
   
    {
      historyList.length === 0 ?<p>
      <small> there is no history</small>
    </p>:<ul>
      {historyList.map((historyItem)=>
         <HistoryItem 
         key={historyItem.id}
         disabled ={restoreHistory === historyItem.id}
         historyItem={historyItem}
         handleRestore={handleRestore}
         
         />
         
      )}
      
    </ul>
    }
  
    
  </div>
  )
}

HistorySection.propTypes={
    historyList:PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number.isRequired,
        inputs :PropTypes.shape({
            a:PropTypes.number.isRequired,
            b:PropTypes.number.isRequired
        }).isRequired,
        operator: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
        result: PropTypes.number.isRequired,
    })
    ),
    restoreHistory:PropTypes.number.isRequired,
    handleRestore:PropTypes.func.isRequired,
  
  }

export default HistorySection