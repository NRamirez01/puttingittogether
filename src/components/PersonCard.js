import React, { useState } from 'react';

const PersonCard = (props) => {
    const { name, hairColor } = props;
    const [age, setAge] = useState(props.age);
    const handleClick = () => {
        setAge (age + 1);
    }
    return (
        <div>
            <p>{name}</p>
            <p>Age: {age} </p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday button for {name} </button>
        </div>
    )
}

export default PersonCard;