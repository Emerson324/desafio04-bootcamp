class Assertions{

    shouldHaveStatus(response, status){
    expect(response.status, `status is ${status}`).to.eq(status)
    }

    validateContractOf(response, schema){
        return cy.wrap(response.body).should(
            schema
        )
    }

    shouldBookingIdIsBePresent(response){
        expect(response.body.bookingid, 'bookingid exists').to.not.be.null;
    }
    
    shoulHaveDefaultHeaders(response){
        expect(response.headers, 'default headers').to.include({
            server: 'Cowboy',
            connection: 'keep-alive',
            'x-powered-by': 'Express'
        })
    }

    shoulHaveDefaultContentTypeAppJson(response){
        expect(response.headers, 'content type').to.include({
            'content-type': 'application/json; charset=utf-8'
        })
    }

    shouldDurationBeFast(response){
        expect(response.duration, 'duration').lessThan(900);
    }
}

export default new Assertions();