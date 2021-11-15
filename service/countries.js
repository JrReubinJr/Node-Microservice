var request = require('request');

var baseurl = 'https://restcountries-v1.p.rapidapi.com/';
var headers = {
    'x-rapidapi-key': '5113821933msh66510a490dd8479p130bcfjsn29e72681c5ef',
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
    useQueryString: true
};

var countries = {
    find: function(req, res, next) {
        let url;
        if (req.params.country.substr(0,3) != 'all'){
            url = baseurl + 'name/' + req.params.country;
        }
        else {
            url = baseurl +  req.params.country;
        }
        var options = {
            method: 'GET',
            url: url,
            headers: headers
        };
        request(options,
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                }
                else{
                    console.log(response.statusCode + response.body);
                    res.send({countries: 'None'})
                }
            });
    }
};


module.exports = countries;