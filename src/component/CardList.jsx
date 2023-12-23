import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
    return (
        <div>
            {countries.map((country) => (
                <Card key={country.name.common} country={country} />
            ))}
        </div>
    );
};

export default CardList;
