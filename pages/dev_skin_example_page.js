const webdriver = require('selenium-webdriver');
const until = webdriver.until;
const By = webdriver.By;
const driver = '';

devSkinExamplePage = function devSkinExamplePage(driver) {
    this.driver = driver;
    this.url = 'http://www.timdouglas.net/contact/';
};
 
devSkinExamplePage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

devSkinExamplePage.prototype.fillName = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.name('Name')).sendKeys('BLAHBLAH').then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};

devSkinExamplePage.prototype.fillEmail = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.name('Email')).sendKeys('BLAHBLAH@BLAHBLAH.com').then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};
 
devSkinExamplePage.prototype.fillMessage = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.name('textarea-797')).sendKeys('Text area content!').then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};

devSkinExamplePage.prototype.submitForm = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.className('wpcf7-form-control')).submit().then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};

devSkinExamplePage.prototype.checkErrorMessage = function() {
    var d = webdriver.promise.defer();
    this.driver.wait(this.driver.findElement(By.className("screen-reader-response",
    1000))).then(function(present) {
        d.fulfill(present);
    });
    return d.promise;
};

module.exports = devSkinExamplePage;