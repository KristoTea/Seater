import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import FaceIcon from '@mui/icons-material/Face';

export default function UserList({users}) {
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
                </ListItem>
            ))}
        </List>
    )
}