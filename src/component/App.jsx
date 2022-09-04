/* eslint-disable no-new-func */
import React,{useState} from 'react'
import './style.css'
// import TextFiled from './ul/textFiled';
// import Button from './ul/button/button';
import InputSection from './inputs/inputSection';
import OparetorSection from './oparetor/oparetorSection';
import HistorySection from './history/historySection';



const initial =
{
  a:0,
  b:0,
};


function* generateId(){
  let id = 0;
  while (true){
    yield id++;

  }
}
const getId = generateId()

const App = () => {

  const [inputState,setInputState]= useState({...initial});
  const [result,setResult] = useState(0);
  const [historyList,setHistory] = useState([]);
  const [restoreHistory,setRestordHistory] = useState(null)

  const handleInputChange =(e)=>{
   setInputState ({
    ...inputState,
    [e.target.name]:parseInt(e.target.value)
   })

  };


  const handleClear = ()=>{
    setInputState({...initial })
    setResult(0)

  };

  const handleAirtimeOps = (operator) =>{
    if (!inputState.a|| !inputState.b){
      alert("invalid input")
    }

    const f = new Function(
      'operator',
      `return ${inputState.a} ${operator} ${inputState.b}` );
      const result= f(operator)
    setResult(result);
    const  historyItem = {
      id : getId.next().value,
      inputs : inputState,
      operator,
      date: new Date(),
      result,
     
    };
    setHistory([historyItem, ...historyList])


    
  };





 const handleRestore = (historyItem) =>{
      setInputState({...historyItem.inputs});
      setResult(historyItem.result)
      setRestordHistory(historyItem.id)

 }
  

  return (
    <div className='app'>
      <h2> Result : {result}</h2>
      
      <InputSection
        inputs={inputState}
        handleInputChange={handleInputChange}
      />
    
 
    <OparetorSection
     handleClear={handleClear} 
     handleAirtimeOps={handleAirtimeOps}
     />

     <HistorySection
     historyList={historyList}
     restoreHistory={restoreHistory}
     handleRestore={handleRestore}
     />
     </div>
  
  )
}

export default App


// first handle user input fields ++ done
// second handle operation  ++ done 
// third handle list of history
// render history list
// restore the history