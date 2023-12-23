import React from 'react';

const Card = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <article key={name.common}>
            <div>
                <img src={flags.png} alt={name.common} />
                <h3>{name.common}</h3>
                <h4>
                    Population: <span>{population}</span>
                </h4>
                <h4>
                    Region: <span>{region}</span>
                </h4>
                <h4>
                    Capital: <span>{capital}</span>
                </h4>
            </div>
        </article>
    );
};

export default Card;
