import React from 'react'; 



const FollowerCard = (props) => {
    const { followerData } = props
    return(
        <div>
            <div className='card-container'>
                <h2>Follower Card Format</h2>
                <h3>{followerData.login}</h3>
                <p>URL: {followerData.html_url}</p>
            </div>
        </div>
    )
}

export default FollowerCard 