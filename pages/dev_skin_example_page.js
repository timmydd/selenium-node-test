var webdriver = require('selenium-webdriver');
 
DevSkinPage = function DevSkinPage(driver) {
    this.driver = driver;
    this.url = 'http://localhost:9002';
};
 
DevSkinPage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};
 
module.exports = DevSkinPage;