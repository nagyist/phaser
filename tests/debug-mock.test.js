vi.mock('../src/gameobjects/GetCalcMatrix', function() {
    throw new Error('FACTORY CALLED!');
});
var GetCalcMatrix = require('../src/gameobjects/GetCalcMatrix');
describe('debug', function() {
    it('checks', function() {
        expect(typeof GetCalcMatrix).toBe('function');
    });
});
