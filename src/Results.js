import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className = "search">
            {pets.length === 0 ? <h1>No Pets Found</h1>
    ): (
        pets.map(pet => (
            <Pet 
            animal={pets.type}
            key={pets.id}
            name={pets.name}
            breed={pets.}

            //Left off here
            />

        ))
            
        )}
        </div>
    );
};