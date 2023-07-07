import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='dib br3 pa3 ma2 grow bg-light-green'>
            <img className='' src={`https://robohash.org/${id}?100x100`} alt='Some Here'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;