const { Router } = require('express');
const { makeInvoker } = require('awilix-express');
function makeController({ logger }) {
  return {
    index: (req, res) => {
      logger.info('finally');
      throw 'Boom!';
      res.send('Heeloe wolw');
    }
  }
}


const router = Router();
router.get('/', makeInvoker(makeController)('index'));
module.exports = router

