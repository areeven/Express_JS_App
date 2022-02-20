import {describe, it as test} from 'mocha'
import Chai from 'chai'
import app from '../Server.js'
import chaiHttp from 'chai-http'

Chai.use(chaiHttp)
const expect = Chai.expect

describe('Api is alive request', () => {
    test('should render Api alive', () => {
        Chai.request(app)
            .get('/')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.text).to.equal('Api alive')
            })
    })
})