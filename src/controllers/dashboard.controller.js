'use strict';

DashboardController.$inject = ['exampleService'];
function DashboardController(exampleService) {
    var _this = this;
    _this.github = '';
    let y = 'kashif';
    let x = `${y}`;

    console.log(x);
    exampleService.testGoogle().then(function(status) {
        _this.github = status;
        console.log(status);
    });
}

module.exports = DashboardController;