const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('dragons', () => {
    //before drop collection
    before( done => {
        const CONNECTED = 1;
        if (connection.readyState === CONNECTED) dropCollection();
        else connection.on('open', dropCollection);

        function dropCollection(){
            const name = 'dragons';
            connection.db
                .listCollections({ name })
                .next( (err, collinfo) => {
                    if (!collinfo) return done();
                    connection.db.dropCollection(name, done);
                });
        }
    });

    const request = chai.request(app);

    
    
    //Marty has a pirate here

    it.skip('GET ALL', done => {
        request
            .get(//route
            )
            .then(
                //assert and call done in here
            )
            .catch(done);
    })
});