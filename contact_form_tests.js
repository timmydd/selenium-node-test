//setting up our requirements
var assert = require('assert'),     
    fs = require('fs'),     
    test = require('selenium-webdriver/testing'),     
    webdriver = require('selenium-webdriver'),
    devSkinExamplePage = require('./pages/dev_skin_example_page.js');
    driver = '';

//setting up our test
test.describe('My Website', function() {
    this.timeout(15000);
    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

test.it('Contact form should return anti spam message', function(){    
    var myContactForm = new devSkinExamplePage(driver);

    myContactForm.visit();
    myContactForm.fillName();
    myContactForm.fillEmail();
    myContactForm.fillMessage();
    myContactForm.submitForm();
    myContactForm.checkErrorMessage();
});});
