const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should respond with the correct status code', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('should have the correct content of the body', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
    });
  });

  it('should have the correct Content-Type', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the correct Content-Length', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});

describe('Cart Page', () => {
  it('should have correct Status Code with num id param', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('should have the correct result with number id parameter', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('should have the correct status code when non number id parameter is provided', () => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('should return the correct content-type given valid id parameter', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should return the correct content in the body when non number id is provided', () => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(body).to.contain('Cannot GET /cart/hello');
    });
  });

  it('should return the correct content length', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('27');
    });
  });
});