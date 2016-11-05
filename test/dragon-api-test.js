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

    var pete = {name: 'Pete', treasure: 'silver', fire: true};
    
   
// GET
    it('GET ALL', done => {
        request
            .get('/dragons')
            .then( res => {
                assert.deepEqual(res.body, []);
                done();
            })
                
            .catch(done);
    });

    it('gets by query string', done => {
        var amethyst = {name: 'Amethyst', color: 'purple'};
 
        request.post('/dragons').send(amethyst)
        .then( () => {
            request
                .get('/dragons/?color=purple')
                .then( res2 => {
                    assert.equal(res2.body.length, 1);
                    assert.equal(res2.body[0].name, 'Amethyst');
                    done();
                })
                .catch(done);
        });

    });

    it('GET by Id', done => {
        var garnet = {
            name: 'Garnet',
            skin: 'red',
            fire: true, 
            treasure: ['gems', 'swords', 'shields']
        };

        request
            .post('/dragons')
            .send(garnet)
            .then(res => { 
                request
                .get(`/dragons/${res.body._id}`)
                .then(res2 => {
                    assert.equal(res2.body.name, 'Garnet');
                    done();
                })
                .catch(err => {
                    done(err);
                });    
            })


            .catch(done);
    });

// PUT

    it('sends PUT request', done => {
        var ruby = {
            name: 'Ruby',
            skin: 'red',
            fire: true, 
            treasure: ['gems', 'swords', 'shields']
        };

        request
            .post('/dragons')
            .send(ruby)
            .then(res => { 
                request
                .put(`/dragons/${res.body._id}`)
                .send({fire: false})
                .then(res2 => {
                    assert.equal(res2.body.fire, false);
                    done();
                })
                .catch(err => {
                    done(err);
                });    
            })
            .catch(done);
            
    });

// POST

    it('sends POST request', done => {
        request
            .post('/dragons')
            .send(pete)
            .then(res => {
                assert.isOk(res.body._id);
                done();
            })
            .catch(done);
    });

// DELETE

    it('deletes a record by id', done => {
        var pearl = {
            name: 'Pearl',
            skin: 'white',
            fire: true, 
            treasure: ['gems', 'swords', 'shields']
        };
        var id;
        var dragon;
        request
            .post('/dragons')
            .send(pearl)
            .then(res => { 
                id = res.body._id;
                request
                    .get(`/dragons/${id}`)
                    .then(res2 => {
                        dragon = res.body;
                        assert.equal(res2.body.name, 'Pearl');
                    })
                    .catch(err => {
                        done(err);
                    });    
            })  
            .then( () => {
                request
                    .delete(`/dragons/${id}`)
                    .then( deleted => {
                        assert.deepEqual(deleted.body, dragon);
                        done();
                    })
                    .catch(err =>{
                        done(err);
                    });
            })
            .catch(done);
    });
});