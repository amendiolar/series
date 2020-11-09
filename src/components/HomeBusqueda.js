
import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';


function HomeBusqueda(){

    const [inputSeries, setinputSeries] = useState('')
    const [data, setdata] = useState([])

 // API CONSULT
 const sendSearch = ({inputSeries}) => {
    axios.get(`http://api.tvmaze.com/search/shows?q=${inputSeries}`)
        .then((response) => {
            console.log(`http://api.tvmaze.com/search/shows?q=${inputSeries}`)
            console.log(response.data)
            setdata(response.data)
        })
}


        return(
            <div>
                <h1>Busqueda de Series Televisivas</h1>
                <br></br>
                <input
                    placeholder="Serie-Name"
                    name="inputToSearch"
                    className="input-Search"
                    onChange={(event) => {
                        setinputSeries({inputSeries: event.target.value})
                    }}
                ></input>
                <button 
                    className="button-search"
                    onClick = {() => sendSearch(inputSeries)}
                >Buscar</button>
                <br></br>
                 <Card bundle = {data}></Card>                
            </div>

        )      

    }


export default HomeBusqueda;
