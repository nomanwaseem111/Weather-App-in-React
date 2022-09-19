import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import WeatherApp from '../weatherApp'


const Home = () => {

    const [cityName, setCityName] = useState("");
    const [data, setData] = useState([]);


    const submitHandler = async (e) => {
        e.preventDefault()

        //   console.log("I am Submit Handler");
        try {

            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=544c8a822fe5faa429dfb63294c5b28b`)

            //  console.log(response);

            setData(response.data.list)
            console.log(response.data.list);



        } catch (error) {
            console.log("error", error);
        }
        //  console.log(responseData);
    }

    return (
        <div>
            <h1>Weather App</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" className='input' required placeholder="Enter your city name"
                        onChange={(e) => {
                            //    console.log(e.target.value)
                            setCityName(e.target.value)
                        }}
                    />
                </Form.Group>
                <Button className='btn' variant="primary" type="submit">
                    get weather
                </Button>
            </Form>



            <div>
                {
                    data.map((eachForCast,index) => (
                        <WeatherApp 
                        key={index}
                        date={eachForCast.dt_txt}
                        temp={eachForCast.main.temp}
                        min={eachForCast.main.temp_min}
                        max={eachForCast.main.temp_max}
                        />
                    ))
                }
            </div>

        </div>

    )
}

export default Home
