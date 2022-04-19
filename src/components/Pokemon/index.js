import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Badge from '../Badge';

const Pokemon = () => {
    let { id } = useParams();
    const [detail, setDetail] = useState(null);
    const [statsData, setStatsData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios(
                `https://pokeapi.co/api/v2/pokemon/${id}/`,
            );
            setStatsData([
                {
                    name: 'HP',
                    value: response.data.stats[0].base_stat,
                },
                {
                    name: 'Attack',
                    value: response.data.stats[1].base_stat,
                },
                {
                    name: 'Defense',
                    value: response.data.stats[2].base_stat,
                },
                {
                    name: 'Special Attack',
                    value: response.data.stats[3].base_stat,
                },
                {
                    name: 'Special Defense',
                    value: response.data.stats[4].base_stat,
                },
                {
                    name: 'Speed',
                    value: response.data.stats[5].base_stat,
                }
            ]);
            setDetail(response.data);
        }
        fetchData();
    }, [id]);
    return (
        <div className='w-full text-center mt-6'>
            <h1 className='text-5xl font-bold capitalize'>{detail != null ? detail.name : "noname"}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[70%] mt-10 mx-auto text-left'>
                <div className='rounded-md bg-gray-100'>
                    <img className='w-full' src={detail != null ? detail.sprites.other.home.front_default : '/loading.png'} alt="pokemon_front"/>
                </div>
                <div className='px-4'>
                    <p>This is {detail != null ? detail.name : "noname"}</p>
                    <div className='grid grid-cols-2 gap-4 mt-4 rounded-md border border-gray-500 p-4'>
                        <div>
                            <p className='text-red-500'>Height</p>
                            <p>{detail != null ? detail.height : 0}</p>
                            <p className='text-green-500'>Weight</p>
                            <p>{detail != null ? detail.weight : 0}</p>
                            <p className='text-yellow-500'>Abilities</p>
                            {
                                detail != null ? detail.abilities.map((ability, index) => {
                                    return <p key={index}>{ability.is_hidden ? "" : ability.ability.name}</p>
                                }) : <></>
                            }
                        </div>
                        <div>
                            <p className='text-blue-500 mb-2'>Types</p>
                            {
                                detail != null ? detail.types.map((type, index) => {
                                    return <Badge key={index} name={type.type.name} classes="w-[50%] mb-1" />
                                }) : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[70%] text-left mt-10 mx-auto'>
                <p className='text-xl font-bold'>Stats</p>
                <ResponsiveContainer width="100%" height={420}>
                    <BarChart
                        height={400}
                        data={statsData}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Pokemon;
