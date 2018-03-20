'use strict';

exampleService.$inject = ['$http'];
function exampleService($http) {
    var _this = this;

    _this.testGoogle = () => {
        return $http.get('https://www.google.lk');
    };
}

function appendTransform(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}

module.exports = exampleService;