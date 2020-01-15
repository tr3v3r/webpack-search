import React, { useState } from 'react';
import './App.css';
import { Box, BoxContainer, Form } from './components'


function  App ()  {
  const [data, setData] = useState([])
  const [inputValue, setValue] = useState('')

    const onSubmit = () => {
      setData(prevData => [...data, inputValue])
    }

    const filteredData = data.filter(text => text.includes(inputValue))
   
    const dataIsEmpty = filteredData.length === 0

    return (
      <div className="App">
      <Form onChange={setValue} dataIsEmpty={dataIsEmpty} inputValue={inputValue} onSubmit={onSubmit} />
      <BoxContainer>
        {
          filteredData.map(text => <Box text={text} /> )
        }          
      </BoxContainer>
      </div>
    );


   
  }


export default App;
