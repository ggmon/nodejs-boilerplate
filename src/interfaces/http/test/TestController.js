const { Router } = require('express');
const { makeInvoker } = require('awilix-express');
function makeController({ logger, constVal }) {
  return {
    index: (req, res) => {
      logger.info('finally');
      //throw 'Boom!';
      res.send(`Heeloe wolw ${constVal}`);
    }
  }
}


const router = Router();
router.get('/', makeInvoker(makeController)('index'));
module.exports = router;

