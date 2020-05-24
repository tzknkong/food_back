const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')

describe('API TEST: /', function() {
  it('[GET]', function(done) {
    request(app)
      .get('/')
      .expect(200, done)
  })
})
