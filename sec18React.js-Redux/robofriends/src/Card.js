import React from 'react';

// const Card = (props)=>{ 
const Card = ({ name, email, id }) =>{
    //destructuring
    // const { name, email, id } = props;

    return (
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${name}?size=200x200`} />
            {/* <h2>{props.name}</h2> */}
            <h2>{name}</h2>
            {/* <p>{props.email}</p> */}
            <p> {email}</p>
            {/* <p>{animal}</p> */}
        </div>
    );
}


export default Card;
