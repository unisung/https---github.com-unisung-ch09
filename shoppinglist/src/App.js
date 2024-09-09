import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {
    AppBar,
    Typography,
    Toolbar,
    Stack,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

import AddItem from './AddItem';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([item, ...items]);
    };

    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Shopping List</Typography>
                </Toolbar>
            </AppBar>
            <Stack alignItems="center">
                <AddItem addItem={addItem} />
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index} divider>
                            <ListItemText
                                primary={item.product}
                                secondary={item.amount}
                            />
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </Container>
    );
}

export default App;
