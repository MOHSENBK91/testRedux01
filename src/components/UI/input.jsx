import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Input({onchange, placeholder}) {
  return (
    <div>
      <InputGroup className="mb-3">
    
    <FormControl
       onChange = {onchange} 
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
    </div>
  )
}

export default Input