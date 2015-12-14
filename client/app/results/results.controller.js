angular.module('ScoutIOApp') //, ['ngMap'], ['uiGmapgoogle-maps']
  .controller('ResultsController', ResultsController);

function ResultsController($scope, NgMap) { //Flickr

  var vm = this;

  vm.name = "Scout IQ";
  vm.search = {
    text: "Wisconsin, campfire, canoe"
  };
// photo.tag is a space separated string of tags so need to use .split(" ") to get a comma seperated array
// the host url is not on this object but can be created by following this convention https://www.flickr.com/photos/{photo.pathalias}/{photo.id}/
  vm.samplePhoto = {
    "id": "10500976616",
    "owner": "35213698@N08",
    "secret": "1a65b05014",
    "server": "7380",
    "farm": 8,
    "title": "The Old Fishing Boats at Little Virginia Lakes",
    "ispublic": 1,
    "isfriend": 0,
    "isfamily": 0,
    "datetaken": "2013-10-13 08:25:30",
    "datetakengranularity": 0,
    "datetakenunknown": 0,
    "tags": "california ca travel autumn usa lake snow color fall nature water northerncalifornia photoshop canon vintage landscape boat photo interestingness google interesting fishing october aluminum day photographer little picture clarity resort explore adobe getty norcal adjust infocus highway395 easternsierra leevining virginialakes monocounty cs6 2013 denoise 60d topazlabs photographersnaturecom davetoussaint",
    "latitude": 38.048217,
    "longitude": -119.258952,
    "accuracy": 16,
    "context": 0,
    "place_id": "NsbUWfBTUb4mbyVu",
    "woeid": "2347563",
    "geo_is_family": 0,
    "geo_is_friend": 0,
    "geo_is_contact": 0,
    "geo_is_public": 1,

    "url_sq": "https:\/\/farm8.staticflickr.com\/7380\/10500976616_1a65b05014_s.jpg",
    "height_sq": 75,
    "width_sq": 75,

    "url_q": "https:\/\/farm8.staticflickr.com\/7380\/10500976616_1a65b05014_q.jpg",
    "height_q": "150",
    "width_q": "150",
    "pathalias": "davetoussaint",

    // generated url for this photo
    "url": "https://www.flickr.com/photos/davetoussaint/10500976616/"
  };

// 10 photo objects to use as dummy data (but they are real flickr photos) //tag search was Eastern Sierra + snow
  vm.photos = [
    {
      "id": "22374118427",
      "owner": "66558193@N06",
      "secret": "722e53ef30",
      "server": "5711",
      "farm": 6,
      "title": "Fall Colors Trip - Gull Lake - 0266",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-22 06:38:14",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "longexposure autumn sky mountain lake inspiration snow reflection fall nature water beautiful clouds landscape outdoors morninglight still lowlight solitude shadows fallcolors exploring details relaxing earlymorning peaceful calm adventure autumncolors invigorating naturephotography newday gulllake easternsierra 2015 upearly landscapephotography junelakeloop mountainpeak smoothwater verticalimage newbeginings fallcolorstrip karltonhuber nikond750",
      "latitude": 37.778109,
      "longitude": -119.079365,
      "accuracy": 13,
      "context": 0,
      "place_id": "KIW949xQUL.Wj4hEhw",
      "woeid": "12587695",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5711\/22374118427_722e53ef30_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5711\/22374118427_722e53ef30_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "22398481310",
      "owner": "11420421@N06",
      "secret": "98717d3d71",
      "server": "5658",
      "farm": 6,
      "title": "Convicted",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-18 14:57:08",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "california trees mountain lake snow mountains fall water colors us unitedstates fallcolors sony nevada sierra 1855 mammothlakes sierranevada convict eastern laurel ilc easternsierra convictlake laurelmountain nex7",
      "latitude": 37.594563,
      "longitude": -118.851762,
      "accuracy": 16,
      "context": 0,
      "place_id": "KIW949xQUL.Wj4hEhw",
      "woeid": "12587695",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5658\/22398481310_98717d3d71_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5658\/22398481310_98717d3d71_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "process21_calvin"
    },

    {
      "id": "22317291440",
      "owner": "66558193@N06",
      "secret": "b51cda1f08",
      "server": "744",
      "farm": 1,
      "title": "Fall Colors Trip - The Splendor Of Fall - 0102",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-21 12:43:00",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "autumn trees snow mountains fall nature beautiful clouds landscape freshair outdoors fallcolors exploring adventure autumncolors stunning rollinghills naturephotography splendor easternsierra naturescape 2015 snowcappedpeaks grandvista mountainpeaks landscapephotography wideopenspaces horizontalimage fallcolorstrip karltonhuber",
      "latitude": 38.099847,
      "longitude": -119.249118,
      "accuracy": 11,
      "context": 0,
      "place_id": "1e.gphhTUbNhexDO",
      "woeid": "2394399",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm1.staticflickr.com\/744\/22317291440_b51cda1f08_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm1.staticflickr.com\/744\/22317291440_b51cda1f08_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "22463355692",
      "owner": "66558193@N06",
      "secret": "0db0bf4a63",
      "server": "5722",
      "farm": 6,
      "title": "Fall Colors Trip - Rock Creek Lake - 9242",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-19 07:29:18",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "longexposure light mountain lake snow cold landscape morninglight solitude kayak quiet wind peaceful bluesky ripples wilderness breeze deserted boatdock rockcreeklake mtmorgan easternsierra 2015 mountainpeaks landscapephotography wideopenspaces wildplaces horizontalimage fallcolorstrip karltonhuber",
      "latitude": 37.461642,
      "longitude": -118.727202,
      "accuracy": 13,
      "context": 0,
      "place_id": "VeX8U_hQUL.qOD5IhQ",
      "woeid": "12587679",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5722\/22463355692_0db0bf4a63_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5722\/22463355692_0db0bf4a63_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "21825327794",
      "owner": "66558193@N06",
      "secret": "79ed533b28",
      "server": "678",
      "farm": 1,
      "title": "Fall Colors Trip - Just A Pinch Of Snow - 9045",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-18 11:23:26",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "trees light sky mountain snow nature beautiful weather rock clouds landscape colorful details wilderness drama invigorating naturalworld rugged steep naturephotography easternsierra 2015 landscapephotography mountainpeak bishopcreekcanyon wildplaces horizontalimage fallcolorstrip nikkor28300mm karltonhuber nikond750",
      "latitude": 37.213685,
      "longitude": -118.612967,
      "accuracy": 13,
      "context": 0,
      "place_id": "96l.IVBQUL_PkuGXzw",
      "woeid": "12587683",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm1.staticflickr.com\/678\/21825327794_79ed533b28_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm1.staticflickr.com\/678\/21825327794_79ed533b28_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "22261203429",
      "owner": "66558193@N06",
      "secret": "12c3b660ae",
      "server": "5835",
      "farm": 6,
      "title": "Fall Colors Trip - High Country Drama - 9048",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-18 11:39:34",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "trees light sky mountain snow nature beautiful weather rock clouds landscape colorful details wilderness drama invigorating naturalworld rugged steep highcountry naturephotography easternsierra 2015 landscapephotography mountainpeak bishopcreekcanyon wildplaces horizontalimage fallcolorstrip nikkor28300mm karltonhuber nikond750",
      "latitude": 37.194749,
      "longitude": -118.563014,
      "accuracy": 13,
      "context": 0,
      "place_id": "96l.IVBQUL_PkuGXzw",
      "woeid": "12587683",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5835\/22261203429_12c3b660ae_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5835\/22261203429_12c3b660ae_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "22434678402",
      "owner": "66558193@N06",
      "secret": "94e460bf07",
      "server": "5810",
      "farm": 6,
      "title": "Fall Colors Trip - An Autumn Morning In McGee Canyon_HDR_9247_48_49_50",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-19 08:24:23",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "ranch autumn light snow fall nature beautiful landscape freshair outdoors freedom morninglight colorful solitude quiet shadows fallcolors gorgeous exploring details peaceful canyon brush adventure autumncolors aspens wilderness barbwire invigorating hdr stables fencepost fenceline naturephotography trailhead easternsierra 2015 mountainpeaks landscapephotography mcgeecreek packstation mcgeecanyon ruggedcountry wildplaces peakcolor horizontalimage fallcolorstrip naturestreasure karltonhuber nikond750",
      "latitude": 37.560159,
      "longitude": -118.795680,
      "accuracy": 13,
      "context": 0,
      "place_id": "KIW949xQUL.Wj4hEhw",
      "woeid": "12587695",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5810\/22434678402_94e460bf07_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5810\/22434678402_94e460bf07_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "karltonhuber"
    },

    {
      "id": "22149875345",
      "owner": "66926252@N07",
      "secret": "336a2fae9d",
      "server": "5808",
      "farm": 6,
      "title": "Parker Mountain",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-06 11:21:03",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "california autumn usa mountain snow plant tree fall pine landscape unitedstates outdoor aspen sagebrush anseladamswilderness easternsierra inyonationalforest parkermountain parkerlaketrail",
      "latitude": 37.843991,
      "longitude": -119.145880,
      "accuracy": 16,
      "context": 0,
      "place_id": "KIW949xQUL.Wj4hEhw",
      "woeid": "12587695",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5808\/22149875345_336a2fae9d_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5808\/22149875345_336a2fae9d_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "kirklougheed"
    },

    {
      "id": "22030555586",
      "owner": "96297516@N04",
      "secret": "cec0bddb0d",
      "server": "5836",
      "farm": 6,
      "title": "Lundy Canyon Trail",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-10-05 09:19:54",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "california mountain snow clouds landscape sierranevada lundy easternsierra lundycanyon lundylake",
      "latitude": 38.023855,
      "longitude": -119.255776,
      "accuracy": 14,
      "context": 0,
      "place_id": "JQlNJKJTVr6T3uXA",
      "woeid": "2443104",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5836\/22030555586_cec0bddb0d_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5836\/22030555586_cec0bddb0d_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "jonetling"
    },

    {
      "id": "21666565912",
      "owner": "14832049@N00",
      "secret": "e4872488b2",
      "server": "5643",
      "farm": 6,
      "title": "Black Horse in Coral and the High Sierra",
      "ispublic": 1,
      "isfriend": 0,
      "isfamily": 0,
      "datetaken": "2015-03-31 00:00:00",
      "datetakengranularity": 0,
      "datetakenunknown": 0,
      "tags": "sky blackandwhite horse snow mountains blackwhite fuji sierra linhof bigsky provia fujinon owensvalley wideaspect bishopca easternsierra sierramountains wideformat padock 6x12 linhoftechnika wideaspectratio opticfilm120 125mmfujinonw",
      "latitude": 37.331436,
      "longitude": -118.394722,
      "accuracy": 15,
      "context": 0,
      "place_id": "96l.IVBQUL_PkuGXzw",
      "woeid": "12587683",
      "geo_is_family": 0,
      "geo_is_friend": 0,
      "geo_is_contact": 0,
      "geo_is_public": 1,
      "url_sq": "https:\/\/farm6.staticflickr.com\/5643\/21666565912_e4872488b2_s.jpg",
      "height_sq": 75,
      "width_sq": 75,
      "url_q": "https:\/\/farm6.staticflickr.com\/5643\/21666565912_e4872488b2_q.jpg",
      "height_q": "150",
      "width_q": "150",
      "pathalias": "fotographis"
    }
  ];

  NgMap.getMap().then(function(map) {
    vm.map = map;
  });

  vm.positions = [];
  for (var i = 0; i < vm.photos.length; i++) {
    //console.log(vm.photos[i]);
    vm.positions.push({
      pos: [vm.photos[i].latitude, vm.photos[i].longitude],
      src: vm.photos[i].url_sq
    })
  }
  console.log(vm.positions);

  vm.showPhotoPin = function(evt, photoId) {
    vm.photo = vm.photos[id];
    vm.map.showInfoWindow('photoInfo', this);
  };

  //https://snazzymaps.com/
  vm.mapStyle = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

  vm.placeChanged = function() {
    vm.place = this.getPlace();
    console.log('location', vm.place.geometry.location);
    vm.map.setCenter(vm.place.geometry.location);
  };

// generated by this flickr api call (api_key is flickr default not ours)
  var apiDEMO = {
    URL: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a8faad8e29a6cfb369a1133d2020ffaf&tags=%27eastern+sierra%27%2C+snow&tag_mode=all&has_geo=1&extras=geo%2Ctags%2C+date_taken%2Cpath_alias%2C+url_sq%2C+url_q&per_page=&format=json&nojsoncallback=1&api_sig=55a4f7f41a3b405d30120bec519036e6"
  }

}
