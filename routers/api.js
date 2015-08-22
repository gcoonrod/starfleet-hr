var express = require('express'),
    router = express.Router(),
    personnelRouter = require('./personnel'),
    divisionRouter = require('./division');

router.use(personnelRouter);
router.use(divisionRouter);

router.route('/')
    .get(function(request, response) {
        response.json({
            message: "Welcome to Starfleet HR!"
        });
    });

module.exports = router;
