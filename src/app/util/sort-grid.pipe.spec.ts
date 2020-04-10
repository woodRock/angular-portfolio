import {TestBed} from '@angular/core/testing';
import {SortGridPipe} from './sort-grid.pipe';

describe('SortGridPipe', () => {
    let pipe: SortGridPipe;

    const pipeSnub = {
        transform: jasmine.createSpy('transform').and.returnValue('')
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                { provide: SortGridPipe, useValue: pipeSnub }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        pipe = TestBed.get(SortGridPipe);
    });

    it('should be created',  () => {
        pipe = TestBed.get(SortGridPipe);
        expect(pipe).toBeTruthy();
    });

    it('should return nothing', () => {
        const test: string[] = pipe.transform([], '');
        const expected = '';
        expect(test).toBe(expected);
    });
});
