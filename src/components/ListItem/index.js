import React from 'react';

const ListItem = ({ title }) => (<div>{ title }</div>);

export default React.memo(ListItem);
