/// <reference types="cypress" />

import req from '../support/api/request'
import schemas from '../support/api/schemas'
import assertions from '../support/api/assertions'

context('Booking', () => {
    before(() => {
        req.doAuth()
    });
    it('Validar o contrato do GET booking @contract', () => {
        req.getBooking().then(getBookingResponse => {
            assertions.validateContractOf(getBookingResponse, schemas.getBookingSchemas())
        })
    });
    it('Criar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            assertions.shouldHaveStatus(postBookingResponse, 200)
            assertions.shouldBookingIdIsBePresent(postBookingResponse)
            assertions.shoulHaveDefaultHeaders(postBookingResponse)
            assertions.shoulHaveDefaultContentTypeAppJson(postBookingResponse)
            assertions.shouldDurationBeFast(postBookingResponse)      
        })
    });

    it('Tentar alterar uma reserva sem token @functional', () => {
        req.postBooking().then(postBookingResponse => {

        req.updateBookingWithoutToken(postBookingResponse).then(putBookingResponse => {
                assertions.shouldHaveStatus(putBookingResponse, 403)
            })
        })
    });

    it('Alterar uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.updateBooking(postBookingResponse).then(putBookingResponse => {
                    assertions.shouldHaveStatus(putBookingResponse, 200)
                })
            })
    });

    it('Excluir uma reserva com sucesso @functional', () => {
        req.postBooking().then(postBookingResponse => {
            req.deleteBooking(postBookingResponse).then(deleteBookingResponse => {
                assertions.shouldHaveStatus(deleteBookingResponse, 201)
            })
        })        
    });

    it('Alterar um reserva inexistente', () => {
        req.updateBookingNotExist().then(updateBooking => {
            assertions.shouldHaveStatus(updateBooking, 405)
        })
        
    });

    it('Alterar um reserva com token inválido', () => {
        req.updateBoookingWithTokenInvalid().then(updateBooking => {
            assertions.shouldHaveStatus(updateBooking,403)
        })
    });
    
    it('Excluir reserva inexistente', () => {
        req.deleteItemNotExist().then(deleteBooking => {
            assertions.shouldHaveStatus(deleteBooking, 405)
        })
    });

    it('Excluir reserva sem token', () => {
        req.deleteItemWithoutToken().then(deleteBooking => {
            assertions.shouldHaveStatus(deleteBooking, 403)
        })
    });

    it('Excluir reserva com token inválido', () => {
        req.deleteWithTokenInvalid().then(deleteBooking => {
            assertions.shouldHaveStatus(deleteBooking, 403)
        })
    });
});


