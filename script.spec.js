describe('copySportsman', () => {
    it('Should create a clone', () => {
        let clone = {
            sport: 'tennis',
            name: 'Elina',
            age: 25,
            gender: 'female',
            country: 'Ukraine',
        };
    });
    expect(copySportsman(sportsman).to.deep.equal(sportsman)); //Выдаёт ошибку в консоле, ссылаясь на 11 строку, не понимаю, что не так??
});

describe('strNumber', () => {
    it('Should show number of string', () => {
        let answer = 4;
        expect(strNumber(sportsman).to.equal(4)); //Не идет тест. Пишет, Cannot read property 'equal'......
    });
});