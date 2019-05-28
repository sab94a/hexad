// @flow

import { INIT, UPDATE_ENTITIES } from 'constants/actions';
import type { Item } from 'types';

export type Action<Type> = {
    type: Type
};

export type PayloadAction<Type, Payload> = {
    type: Type,
    payload: Payload
};

export type UpdateEntitiesPayload = {
    entity: string,
    entities: Array<Item>
}

export type InitAction = Action<INIT>;
export type UpdateEntities = PayloadAction<UPDATE_ENTITIES, UpdateEntitiesPayload>

export const init = ():InitAction => ({ type: INIT });
export const updateEntities = (payload: UpdateEntitiesPayload ):UpdateEntities => 
    ({ type: UPDATE_ENTITIES, payload });
