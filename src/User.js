import React from 'react';

const User = ({user}) => (
    <div>
        <p>UserId: {user.userId}</p>
        <p>UserName: {user.name}</p>
    </div>
)

export default User;