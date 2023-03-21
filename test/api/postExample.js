const { it } = require('mocha')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Example', () =>{
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id" : 123,
            "username" : "azizzabdul",
            "firstName" : "abdul",
            "lastName" : "aziz",
            "email" : "test.abdul@gmail.com",
            "password" : "abdul123",
            "phone" : "089540123123",
            "userStatus" : 1
        })

        console.log((await response).status)
        console.log((await response).body)
    })
})