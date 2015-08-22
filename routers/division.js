var express = require('express'),
    router = express.Router(),
    divisionController = require('../controllers/division');

//Base: /api/division/
router.route('/divisions')
    .get(divisionController.getDivisions)
    .post(divisionController.postDivision);

router.route('/divisions/:division_id')
    .get(divisionController.getDivision);

module.exports = router;
