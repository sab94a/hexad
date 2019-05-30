// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Empty from 'components/Empty';
import Loader from 'components/Loader';
import ListItem from 'components/ListItem';

import type { Item } from 'types';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15
    }
});

type Props = {
    items: Array<Item>,
    loading: boolean,
    onItemRateChange: () => void
};

const List = ({ items, loading, onItemRateChange }: Props) => {
    const isEmpty = !items.length;
    const { root } = useStyles();

    return (
        <div className={ root }>
            {loading && (
                <Loader />
            )}

            {!loading && isEmpty && (
                <Empty />
            )}

            {!loading && !isEmpty && items.map(item => (
                <ListItem { ...item } onRateChange={ onItemRateChange } key={ item.id } />
            ))}
        </div>
    );
};

export default React.memo<Props>(List);
