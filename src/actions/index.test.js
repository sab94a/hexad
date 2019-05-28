import { init } from './';
import { INIT } from 'constants/actions'; 

describe('Actions', () => {
    it('Init has correct type', () => {
        const { type } = init()

        expect(type).toEqual(INIT);
    })
})
