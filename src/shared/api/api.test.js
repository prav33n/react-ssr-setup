import { getSeriesList, getSeriesData } from './api';

describe('API test', () => {
    it('get the list of series', () => {
        return getSeriesList().then((data) => {
            expect(data.length > 0);
            expect(data).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        type: expect.any(String),
                        coverImage: expect.any(String),
                        title: expect.any(String),
                        synopsis: expect.any(String),
                        seasons: expect.any(Number),
                    }),
                ])
            );
        });
    });
    it('get the selected series', () => {
        return getSeriesData('paradise-hotel-sverige').then((data) => {
            expect(data).toEqual(
                expect.objectContaining({
                    type: expect.any(String),
                    coverImage: expect.any(String),
                    title: expect.any(String),
                    synopsis: expect.any(String),
                })
            );
        });
    });
});
