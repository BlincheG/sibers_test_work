/* eslint-disable no-lone-blocks */
import React from 'react';

const UsersList = (props) => (
    <tbody>
        {props.users.map((user) => (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td onClick={() => props.onUserClick(user.id)} style={{ cursor: 'pointer' }}>{user.name}</td>
            <td>{user.phone}</td>
        </tr>
        ))}
    </tbody>
)

export default UsersList