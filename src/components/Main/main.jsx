import React from 'react'
import CustomCard from '../UI/card'
import {Row} from 'react-bootstrap'

function Main({data ,  rating , title}) {
  return (
    <div>
      <Row xs={2} md={3} className="g-4">
  {data.map((el,key)=>
  { 
    if (el.name  !=  ' '  )return  <CustomCard el={el}/>
   
  }
      
  )} 
  </Row>

    </div>
  )
}

export default Main