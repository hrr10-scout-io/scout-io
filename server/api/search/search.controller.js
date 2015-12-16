'use strict';


var _ = require('lodash');
var request = require('request');
var config = require('../../config/environment');

var flickrSearch = "flickr.photos.search";
var flickrAPIKey = config.flickr.apiKey;

var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + flickrAPIKey;
var flickrEnd = "&tag_mode=all&has_geo=1&extras=geo%2Ctags%2C+date_taken%2Cpath_alias%2C+url_s%2C+url_m&format=json&nojsoncallback=1";

// URL: https://api.flickr.com/services/rest/
// ?method=flickr.photos.search
// &api_key=BLAHBLAHBLAH
// &tags=%27eastern+sierra%27%2C+snow
// &tag_mode=all
// &has_geo=1
// &extras=geo%2Ctags%2C+date_taken%2Cpath_alias%2C+url_s%2C+url_m&per_page=
// &format=json
// &nojsoncallback=1 // or pass in a function here for the result to be passed into before being displayed
// &api_sig= not the same as api_key unk what this does

// how do tags need to be parsed, can params be in any order? what does nojsoncallback and api_sig for?
//  url with lat lon:  &tag_mode=all&has_geo=1&lat=37.623617&lon=-119.013540&radius=5&radius_units=mi&extras=

// should we use the nodeFlickrAPI package

//  %27 = ''  //  %2C = , // + = space
// do req.params.tags = " 'eastern sierra', snow " need to be parsed into "%27eastern+sierra%27%2C+snow"
// var query = flickrURL + "&tags=" + req.params.tags + flickrEnd;


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

// Gets photos by tagSearch only
exports.tags = function (req, res) {
  var query = flickrURL + "&tags=" + req.params.query + flickrEnd;
  var options = {
    url: query
  };

  request(options, function (err, response, data) {
    if (err) {
      console.log(err);
    }

    console.log("data", data);

    res.send(data);
  });
};

// Gets photos within a radius without filtering by tag
exports.geo = function (req, res) {
  var query = flickrURL;

};

// Gets photos that match all passed params / all params optional
exports.searchCriteria = function (req, res) {
  console.log('here in searchCriteria');


};
