import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { Item } from 'entity';

const selectListState = ({ list }) => list;
const selectListEntities = ({ entities }) => entities;

const selectListIds = createSelector(
    selectListState,
    ({ items }) => items
);

export const selectList = createSelector(
    selectListIds,
    selectListEntities,
    (ids, entities) =>
        denormalize(ids, [Item], entities)
);


export const selectLoading = createSelector(
    selectListState,
    ({ loading }) => loading
);