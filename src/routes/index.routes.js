const {Router} = require('express') 
const router = Router();

const {renderIndex, renderAbout} = require('../Controllers/index.controller')

router.get ('/', renderIndex);


router.get ('/about',  renderAbout);

module.exports = router;