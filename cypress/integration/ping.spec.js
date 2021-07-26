/// <reference types="cypress" />

import req from '../support/api/request'
import assertions from '../support/api/assertions'

context('Ping', () => {
    it.only('Validar que a aplicação está no ar @healthcheck', () => {
        // request
        req.getPing().then(getPingResponse => {
            assertions.shouldHaveStatus(getPingResponse, 201)
        })
    });
});