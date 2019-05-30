// @flow

import { normalize } from 'normalizr';
import { Item } from 'entity';

const getResponse = res => res.json()
const getNormalizedList = ({ data }) => normalize(data, [Item])

export default class Api {
    static fetchList() {
        return fetch('/list.json')
            .then(getResponse)
            .then(getNormalizedList)
    }
}