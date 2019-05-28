import React from 'react';
import List from 'components/List';

const items = [
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' }
];

const App = () => (
    <List items={ items } />
);

export default App;
