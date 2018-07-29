import React from 'react';

const Card = ({key, id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}) => {
    return(
        <div className = "tc grow bg-washed-green br3 pa2 ma2 dib bw2 shadow-5">            
            <img src = {`https://robohash.org/${id}?size=100x100`} alt="robo"/>
            <div>
                <h2> { name } </h2>
                <p> height: {height} </p>
                <p> Mass: {mass} </p>
                <p> Hair Color: {hair_color} </p>
                <p> Skin Color: {skin_color} </p>
                <p> Eye Color: {eye_color} </p>
                <p> Birth Year: {birth_year} </p>
                <p> Gender: {gender} </p>
            </div>
        </div>
    );
}

export default Card;