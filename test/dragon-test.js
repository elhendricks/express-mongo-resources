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
    it('works if you give it what it expects', done => {
        const dragon = new Dragon({
            name: 'Draco',
            treasure: ['rubies', 'gold', 'swords'],
            fire: true,
            color: 'green'
        });

        dragon.validate( err => {
            assert.isNotOk(err);
            if (!err) done();
            else done(err);
        });
    });
    // Name

    it('requires a name', done => {
        const dragon = new Dragon({
            treasure: ['rubies', 'gold', 'swords'],
            fire: true,
            color: 'green'
        });

        dragon.validate(err => {
            assert.isOk(err);
            if (err) done();

            //call done when everthing is ok

            //call done with err if it's not supposed to do that.'
        });
    });

    it('throws an error if name is not a string', done => {
        const dragon = new Dragon({
            name: [],
            treasure: ['sea shells',  'coins', 'lighthouses'],
            fire: true,
            color: 'green'
        });

        dragon.validate(err => {
            assert.isOk(err);
            done();
        });
    });

    // Skin validation
    it('assigns correct skin color', done => {
        const dragon = new Dragon({
            name: 'Pete',
            treasure: ['sea shells',  'coins', 'lighthouses'],
            fire: true,
            color: 'blue'
        });

        dragon.validate(err => {
            if (err) return done(err);
            assert.equal(dragon.color, 'blue');
            done();
        });
    });

    it('assigns default skin color to red', done => {
        const dragon = new Dragon({
            name: 'Pete',
            treasure: ['sea shells',  'coins', 'lighthouses'],
            fire: true,
        });

        dragon.validate(err => {
            if (err) return done(err);
            assert.equal(dragon.color, 'red');
            done();
        });
    });

    // Treasure Validation
    it('coerces treasure into an array', done => {
        const dragon = new Dragon({
            name: 'Draco',
            treasure: 'hoarde',
            fire: true,
            color: 'green'
        });

        dragon.validate( err => {
            if (err) return done(err);
            assert(Array.isArray(dragon.treasure));
            done();
        });
    });    

    // Fire validation
    // it('sets fire to a boolean', done => {
    //     const dragon = new Dragon({
    //         name: 'Draco',
    //         treasure: 'hoarde',
    //         fire: '',
    //         color: 'green'
    //     });

    //     dragon.validate( err => {
    //         if (err) return done(err);
    //         console.log(dragon.fire);
    //         assert.equal(dragon.fire, (true || false));
    //         done();
    //     });
    // });
});