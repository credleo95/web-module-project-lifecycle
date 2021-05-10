import React from 'react'; 


const Card = (props) => {
const { data } = props 
    return(
        <div>
            <div className='card-container'>
                <h2>Github Card</h2>
                <h3>{data.login}</h3>
                <p>Bio: {data.bio}</p>
                <p>Followers:{data.followers}</p>
            </div>
        </div>
    )
}

export default Card; 