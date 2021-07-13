import React from 'react';
// import CowsList from './CowsList';

const Cows = ({cows}) => {
    return (
        <div>
           { console.log(cows)}
            {cows.map(cow => (
                <h2 key={cow.id}>{cow.name}</h2>
            ))}
        </div>
    );
}

export default Cows;
