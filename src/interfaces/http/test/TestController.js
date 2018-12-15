const { Router } = require('express');
// const { inject } = require('awilix-express');
// const Status = require('http-status');

const TestController = {
  get router() {
    const router = Router();
    router.get('/', function (req, res){
      res.send('Hello World');
    });
    return router;
  }

};

module.exports = TestController;
