const { expect } = require('chai');
const SpotlightRedirect = require('../index')

describe('main module', () => {
    
    describe.only('be compatible with ghostjs rules', () => {
        const ghostRules = [
            {
                "from": "/path/a/" ,
                "to":  "/path/b/",
                "permanent": true
            }
        ];

        const redirector = new SpotlightRedirect(ghostRules);

        it('/path/a/ becomes /path/b/', () => {
            expect(redirector.needRedirect('/path/a/')).to.be.true
            expect(redirector.redirectTo('/path/a/')).to.be.equal('/path/b/')
        });
    })

    describe('redirect too with domain', () => {
        it('domain to another domain', () => {
            expect('www.zoom.com.br').to.be.equals('')
        })
    })

    describe('redirect too with domain', () => {
        it('domain to another domain', () => {
            expect('www.zoom.com.br').to.be.equals('')
        })
    })
    
})