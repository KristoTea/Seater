import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import FaceIcon from '@mui/icons-material/Face';
import ClearIcon from '@mui/icons-material/Clear';

export default function UserList({users, deleteUsers, deleteUser}) {
    return (
        <List sx={{ width: '100%' }}>
            {users.map(user => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <FaceIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.position} />
                    {deleteUsers && <ClearIcon style={{cursor: "pointer"}} onClick={() => deleteUser(user.id)}/>}
                </ListItem>
            ))}
        </List>
    )
}