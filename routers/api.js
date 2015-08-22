var express = require('express'),
    router = express.Router(),
    personnelRouter = require('./personnel');

router.use(personnelRouter);

router.route('/')
    .get(function(request, response) {
        response.json({
            message: "Welcome to Starfleet HR!"
        });
    });

module.exports = router;
