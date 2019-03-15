import React from 'react';

const Friends = (props) => {
    return <div> {props.users.map(user => <div>
            <img src={user.photos.small}/>
            <span>{user.status}</span>
        </div>
    )
    }
    </div>
}

export default Friends
