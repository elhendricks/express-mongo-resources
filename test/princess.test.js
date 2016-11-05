const Princess = require('../lib/models/princess');
const assert = require('chai').assert;

describe('Princess model', () => {

    // Name

    it('requires a name', done => {
        const princess = new Princess({
            baddass: true,
            skill: 'assasin'
        });

        princess.validate(err => {
            assert.isOk(err);
            if (err) done();

        });
    });

    it('throws an error if name is not a string', done => {
        const princess = new Princess({
            name: [],
            skill: 'fire'
        });

        princess.validate(err => {
            assert.isOk(err);
            done();
        });
    });

    // baddass validation
    it('assigns correct badass property', done => {
        const princess = new Princess({
            name: 'Chelsea',
            badass: false,
            skill: 'motherhood'
        });

        console.log(princess);

        princess.validate(err => {
            if (err) return done(err);
            assert.equal(princess.badass, false);
            done();
        });
    });

    it('assigns default badass property to true', done => {
        const princess = new Princess({
            name: 'Erica'
        });

        princess.validate(err => {
            if (err) return done(err);
            assert.equal(princess.badass, true);
            done();
        });
    });

    // Skill Validation
    it('assigns correct skill', done => {
        const princess = new Princess({
            name: 'Erica',
            skill: 'diplomacy'
        });

        princess.validate( err => {
            if (err) return done(err);
            assert.equal(princess.skill, 'diplomacy');
            done();
        });
    });    

});