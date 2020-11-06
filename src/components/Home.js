import React from 'react';
import SearchBar from './HomeBusqueda';
import SerieCard from './SerieCard';

function Home(props){

    const [contactos, setContactos] = useState ([
   
    ]);

    sendSearch = (inputSeries) => {
        // aca vamos a hacer la llamada a la API
        axios.get(`http://api.tvmaze.com/search/shows?q=girls${inputSeries}`)
            .then((response) => {
              console.log(response.data)
              this.setState({ results: response.data })
            })
    }
    

      render() {

      return (
        <div className="App">
          <SearchBar emitSearch={sendSearch}></SearchBar>
          <SerieCard results ={data}>w</SerieCard>
        </div>
      );
    }
    
    }
    


Home.propTypes = {
    
}

export default Home;





