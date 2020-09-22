const UrlQueryBuilder = require('../src/index');

test('Query must be like ?a=10&b=5', () => {
    const entry = {
        a: 10,
        b: 5
    };

    const q = new UrlQueryBuilder(entry);
    expect(q.build()).toBe('?a=10&b=5');
});

test('Query must be like ?name=enes&age=22', () => {
    const entry = {
        name: 'enes',
        age: 22
    };

    const q = new UrlQueryBuilder(entry);
    expect(q.build()).toBe('?name=enes&age=22');
});