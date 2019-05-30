// @flow

import {
    INIT,
    UPDATE_ENTITIES,
    SET_RATE,
    START_LOADING_RATE,
    END_LOADING_RATE
} from 'constants/actions';

export type Action<Type> = {
    type: Type
};

export type PayloadAction<Type, Payload> = {
    type: Type,
    payload: Payload
};

export type UpdateEntitiesPayload = {
    [string]: any
}

export type SetRatePayload = {
    id: number,
    rate: number,
}

export type Init= Action<INIT>;
export type UpdateEntities = PayloadAction<UPDATE_ENTITIES, UpdateEntitiesPayload>
export type SetRate = PayloadAction<SET_RATE, SetRatePayload>
export type StartLoadingRate = Action<START_LOADING_RATE>;
export type EndLoadingRate = Action<END_LOADING_RATE>;

export const init = ():Init => ({ type: INIT });
export const updateEntities = (payload: UpdateEntitiesPayload ): UpdateEntities => 
    ({ type: UPDATE_ENTITIES, payload });

export const setRate = (payload: SetRatePayload): SetRate => 
    ({ type: SET_RATE, payload })

export const startLoadingRate = ():StartLoadingRate => ({ type: START_LOADING_RATE });
export const endLoadingRate = ():EndLoadingRate => ({ type: END_LOADING_RATE });
