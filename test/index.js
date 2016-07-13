'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server');
const agent = request.agent(app);

test('Counter App', (route) => {

  route.test('GET /api/counters', (should) => {

    agent.get('/api/counters')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {

        should.equal( typeof res.body, 'object', 'response should be a json object' );
        should.ok( Object.keys(res.body).length > 0, 'response should have at least one counter' );
        should.ok( Object.keys(res.body).every((key) => res.body[ key ].hasOwnProperty('count')  ), 'each value should be an object with a count property');
        should.end();

      });

  });

  route.test('GET /api/counters/1', (should) => {

    agent.get('/api/counters/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {

        should.equal( typeof res.body, 'object', 'response should be a json object' );
        should.equal( Object.keys(res.body).length, 1, 'response should have only key' );
        should.ok( res.body.hasOwnProperty('count'), 'response should only have the "count" property' );
        should.end();

      });

  });
});
