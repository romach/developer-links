'use strict';
(function () {
    var app = angular.module('application', []);
    app.controller('ArticlesController', function () {
        this.articles = articles;
    });

    var articles = [
        {
            title: "SQLBolt",
            link: "https://sqlbolt.com",
            description: "Interactive lessons to learn SQL in browser."
        },
        {
            title: "RegexOne",
            link: "https://regexone.com/",
            description: "Interactive lessons and exercises to help you learn regular expressions."
        },
        {
            title: "Iconfinder",
            link: "https://www.iconfinder.com/",
            description: "Collection of high-quality icons."
        }
    ];
})();
