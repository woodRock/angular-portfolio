import {TimeAgoPipe} from 'time-ago-pipe';
import {TestBed} from '@angular/core/testing';

describe('TimeAgoPipe', () => {
    let pipe: TimeAgoPipe;
    const timeAgoPipeSnub = {
        transform : jasmine.createSpy('transform').withArgs('').and.returnValue('')
    };
    beforeEach(async () => TestBed.configureTestingModule({
        providers: [
            { provide: TimeAgoPipe, useValue: timeAgoPipeSnub }
        ]
    }));

    beforeEach(() => {
        pipe = TestBed.get(TimeAgoPipe);
    });

    it('should be created', () => {
        pipe = TestBed.get(TimeAgoPipe);
        expect(pipe).toBeTruthy();
    });

    it('should return nothing', () => {
        const test: string = pipe.transform('');
        const expected = '';
        expect(test).toEqual(expected);
        expect(pipe.transform).toHaveBeenCalled();
    });
});
