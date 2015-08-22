var Person = require("../models/person");

exports.getPersonnel = function (request, response){
    Person.find(function(error, personnel){
        if(error) {
            response.send(error);
        }

        response.json(personnel);
    });
};

exports.postPerson = function(request, response){
    var person = new Person();

    person.givenName = request.body.givenName;
    person.middleName = request.body.middleName || "";
    person.familyName = request.body.familyName;
    person.rank = request.body.rank;
    person.division = request.body.division || null;

    person.save(function(error){
        if(error){
            response.send(error);
        }

        response.json({
            message: person.givenName + " added to Starfleet HR.",
            data: person
        });
    });
};
