var express = require('express'),
    router = express.Router(),
    personnelController = require("../controllers/personnel");

//Base: /api/personnel/
router.route('/personnel')
    .get(personnelController.getPersonnel)
    .post(personnelController.postPerson);

router.route('/personnel/:person_id')
    .get(personnelController.getPerson);

module.exports = router;
