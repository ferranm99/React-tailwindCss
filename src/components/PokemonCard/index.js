import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Badge from '../Badge';

const PokemonCard = (props) => {
    const {data} = props;
    const [detail, setDetail] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const response = await axios(
                data.url,
            );
            setDetail(response.data);
        }
        fetchData();
    }, [data]);
    return (
        <Link to={`/pokemon/${detail!=null?detail.id:1}`}>
            <div className='rounded-md pb-2 mb-2 transition ease-in-out hover:cursor-pointer hover:scale-110 duration-300'>
                <div className='w-full bg-gray-100 rounded-md'>
                    <img src={detail!=null?detail.sprites.other.home.front_default:'/loading.png'} className='w-full' alt="pokemon_front"></img>
                </div>
                <div className='px-4'>
                    <p className='text-gray-500 font-sans mb-3'>#{detail!=null?detail.id:0}</p>
                    <p className='text-2xl font-bold mb-2 capitalize'>{detail!=null?detail.name:"noname"}</p>
                    <div className='flex flex-row'>
                        {
                            detail!=null?detail.types.map((type, index) => {
                                return <Badge key={index} name={type.type.name} classes="w-[38%] mr-1"/>
                            }):<></>
                        }                        
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PokemonCard;
