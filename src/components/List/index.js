import React from 'react';
import Empty from 'components/Empty';
import Loader from 'components/Loader';
import ListItem from 'components/ListItem';

const List = ({ items, loading }) => {
    const isEmpty = !items.length;

    return (
        <div>
            {loading && (
                <Loader />
            )}

            {!loading && isEmpty && (
                <Empty />
            )}

            {!loading && !isEmpty && items.map(({ title, id }) => (
                <ListItem title={ title } key={ id } />
            ))}
        </div>
    );
};

export default React.memo(List);
