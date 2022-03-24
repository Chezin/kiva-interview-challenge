import { fetchLoans }  from '../services/fetchLoans';

test('the data is fetched', () => {
    return fetchLoans().then(data => {
        expect(data).not.toBeUndefined();
    });
});
