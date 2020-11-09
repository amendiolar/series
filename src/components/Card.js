import React from 'react';



function Card ({bundle}) {

    const results = () => {
        return bundle.map((serie) =>
        <div class='card'>
        <img src={serie.show.image?serie.show.image.original:
            "https://thumbs.dreamstime.com/b/el-logotipo-linear-negro-de-la-c%C3%A1mara-foto-no-le-gusta-ninguna-imagen-disponible-106031126.jpg"} alt="portada-Serie" width="150" height="200"/>
        <h3 key={serie.show.id}>{serie.show.name}</h3>
        </div>
        )}
    return (
        <div>
            {results()}
        </div>
    )

}

export default Card;


