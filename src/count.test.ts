import { count } from './count';

test('Tests the count function', () => {
    let data = [4, 2, 3, 4, 2, 9, 0, -4, 6, 4, 1];
    expect(count(4, data)).toBe(3);
})

