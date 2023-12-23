import React, { useState, useEffect } from 'react';
import CardList from './CardList';

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCountryData();
    }, []);

    return (
        <div>
            <h1>where is world?</h1>
            <CardList countries={countries} />
        </div>
    );
};

export default Countries;
