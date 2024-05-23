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

  it('should have the corrent Content-Type', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the corrent Content-Length', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});

describe('Cart Page', () => {
  it('should have correst Status Code with num id param', () => {
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

describe('/available_payments', () => {
  it('should return status code 200', () => {
    request.get('http://localhost:7865/available_payments', (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it("should return body content 'Welcome to the payment system'", () => {
    request.get('http://localhost:7865/available_payments', (error, res, body) => {
      expect(JSON.parse(body)).to.deep.equal(
        { payment_methods: { credit_cards: true, paypal: false } });
    });
  });

  it('should have the correct content type', () => {
    request('http://localhost:7865/available_payments', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });

  it('should have the correct content length', () => {
    request('http://localhost:7865/available_payments', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('56');
    });
  });
});

describe('/login', () => {
  it('should return status code of 200', () => {
    request.post({
      url: 'http://localhost:7865/login',
      form: { userName: 'Betty' }
    }, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });
  it('should return Welcome Betty', () => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' }
    }, (error, res, body) => {
      expect(res.body).to.be.equal('Welcome Betty');
    });
  });

  it('should return the correct result with form data value', () => {
    const data = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: data,
      json: true,
    }, (error, res, body) => {
      expect(body).to.contain('Welcome Betty');
    });
  });

  it('should return the correct content type', () => {
    const data = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: data,
      json: true,
    }, (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should return the correct content length', () => {
    const data = {
      userName: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: data,
      json: true,
    }, (error, res, body) => {
      expect(res.headers['content-length']).to.equal('13');
    });
  });

  it('should return the correct status 404 with invalid get value', () => {
    const data = {
      username: 'Betty',
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: data,
      json: true,
    }, (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });
});