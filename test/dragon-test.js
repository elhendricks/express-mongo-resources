const Dragon = require('../lib/models/dragon');
const assert = require('chai').assert;

describe('Dragon model', () => {
//     it('enforces a thing', done => {
//         const dragon = new Dragon({
//             prop: val,
//             otherProp: otherVal
//         });

//         dragon.validate(err => {
//             //assert in  here.  
//             //call done when everthing is ok
//             //call done with err if it's not supposed to do that.'
//         });
//     });


    it('requires a name', done => {
        const dragon = new Dragon({
            treasure: ['rubies', 'gold', 'swords'],
            fire: true,
            color: 'green'
        });

        dragon.validate(err => {
            assert.isOk(err);
            done();

            //call done when everthing is ok

            //call done with err if it's not supposed to do that.'
        });
    });    
});