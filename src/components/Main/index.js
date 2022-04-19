import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../PokemonCard';

const Main = () => {
    const [pokemons, setPokemons] = useState([]);    
    useEffect(() => {        
        async function fetchData() {
            const response = await axios(
                `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40`,
            );
            setPokemons(response.data.results);
        }
        fetchData();
    }, []);
    return (
        <div className='w-full text-center'>
            <h1 className='text-5xl font-bold text-gray-800'>Pokemons</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[70%] mt-10 mx-auto text-left'>
                {
                    pokemons.map((item, index) => {
                        return <PokemonCard key={index} data={item} />
                    })
                }
            </div>
        </div>
    );
};

export default Main;
