import React from 'react';

const Badge = (props) => {
    const { name, classes } = props;
    let text = "text-white";
    let background = "bg-gray-500";
    switch (name) {
        case "grass":
            background = "bg-lime-300";
            text = "text-gray-800";
            break;
        case "poison":
            background = "bg-purple-400";
            text = "text-white";
            break;
        case "fire":
            background = "bg-orange-400";
            text = "text-white";
            break;
        case "flying":
            background = "bg-gradient-to-b from-cyan-400 to-gray-400";
            text = "text-gray-800";
            break;
        case "water":
            background = "bg-sky-500";
            text = "text-white";
            break;
        case "bug":
            background = "bg-lime-600";
            text = "text-white";
            break;
        case "normal":
            background = "bg-gray-400";
            text = "text-gray-800";
            break;
        case "electric":
            background = "bg-yellow-400";
            text = "text-gray-800";
            break;
        case "ground":
            background = "bg-gradient-to-b from-yellow-400 to-gray-400";
            text = "text-gray-800";
            break;
        case "fairy":
            background = "bg-red-200";
            text = "text-gray-800";
            break;
        case "fighting":
            background = "bg-amber-600";
            text = "text-white";
            break;
        case "psychic":
            background = "bg-fuchsia-400";
            text = "text-white";
            break;
        case "rock":
            background = "bg-yellow-800";
            text = "text-white";
            break;
        case "steel":
            background = "bg-zinc-300";
            text = "text-gray-800";
            break;
        case "ice":
            background = "bg-cyan-400";
            text = "text-gray-800";
            break;
        case "ghost":
            background = "bg-purple-700";
            text = "text-white";
            break;
        case "dragon":
            background = "bg-gradient-to-b from-cyan-500 to-red-400";
            text = "text-white";
            break;
        case "dark":
            background = "bg-gray-900";
            text = "text-white";
            break;
        default:            
            background = "bg-gray-500";
            text = "text-white";
            break;
    }
    return (
        <div className={`rounded-sm p-1 text-center text-xs capitalize ${classes} ${text} ${background}`}>{name}</div>
    );
};

export default Badge;
