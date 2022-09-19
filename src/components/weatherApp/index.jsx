import React from 'react'
import Card from 'react-bootstrap/Card';
import './index.css'
import moment from 'moment'

const WeatherApp = ({date,temp,min,max}) => {
  return (
    <div className='main'>
    <Card>
   <Card.Body>
     <Card.Title>{moment(date).format('dddd h a')}</Card.Title>
     <h1 className="mb-2">{temp}</h1>
     <Card.Text>
      {min} - {max}
     </Card.Text>
   </Card.Body>
 </Card>
    </div>

  )
}

  

export default WeatherApp
