// @flow

import { normalize } from 'normalizr';
import { ItemEntity, Item } from 'entity';

export default class Api {
    static fetchList() {
        return fetch('/list.json')
            .then(res => res.json())
            .then(({ data }) => normalize(data, [Item]))
            .then(({ result, entities }) => 
                ({ list: result, entities: entities[ItemEntity], entity: ItemEntity }));
    }
}