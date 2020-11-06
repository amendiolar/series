
import React, { useState } from 'react';
import axios from 'axios';


function HomeBusqueda(){

    const [inputSeries, setinputSeries] = useState('')


    // API CONSULT
    sendSearch = (inputSeries) => {
        axios.get(`http://api.tvmaze.com/search/shows?q=girls${inputSeries}`)
            .then((response) => {
              console.log(response.data)
              setState({ results: response.data })
            })
    }

 
        return(
            (<div>
                <h1>Busqueda de Series</h1>
                <br></br>
                <input
                    placeholder="Busqueda"
                    name="inputSeries"
                    className="search-input"
                    onChange={(event) => {
                        setinputSeries({inputSeries: event.target.value})
                    }}
                ></input>
                <button 
                className="search-button"
                onClick = {() => emitSearch(this.state.inputSeries)}
                >Buscar</button>
            </div>)

           ( <div>
               {results.map((serie) =>
                    
                )}

            </div>)

        )
    }


export default HomeBusqueda;
