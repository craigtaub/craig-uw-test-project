const httpMocks = require('node-mocks-http');
const sinon = require('sinon');
const chai = require('chai');
const setName = require('../../src/middleware/setName');

const expect = chai.expect;

describe('SetName', function() {
  const fakeRequest = httpMocks.createRequest();
  const fakeResponse = httpMocks.createResponse();
  const fakeNext = () => {};

  beforeEach(() => {
      fakeResponse.locals = {};
  });

  it('should set a name onto the response locals', function() {
      setName(fakeRequest, fakeResponse, fakeNext);
      expect(fakeResponse.locals.name).to.not.be.undefined;
  });

  it('should set a name onto the response locals', function() {
      setName(fakeRequest, fakeResponse, fakeNext)
      expect(fakeResponse.locals.name).to.eql('Craig');
  });

  it('should call next', () => {
    const spyNext = sinon.spy();
    setName(fakeRequest, fakeResponse, spyNext);
    expect(spyNext.calledOnce).to.be.true;
  });
});
