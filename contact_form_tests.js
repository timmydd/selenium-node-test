//setting up our requirements
var assert = require('assert'),     
    fs = require('fs'),     
    test = require('selenium-webdriver/testing'),     
    webdriver = require('selenium-webdriver'),
    By = webdriver.By;

//setting up our test
test.describe('My Website', function(){     
this.timeout(15000);
});

test.describe('My Website', function() {
    this.timeout(15000);
    var driver;
    test.before(function() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    });

    test.it('Contact form should return anti spam message', function(){    
    
    const until = webdriver.until; 
    
    driver.get('http://www.timdouglas.net/contact'); 
    driver.findElement(webdriver.By.name('Name')).sendKeys('TimmyTest');
    driver.findElement(webdriver.By.name('Email')).sendKeys('timmy@timmy.com');
    driver.findElement(webdriver.By.name('textarea-797')).sendKeys('This is a test of node.js and mocha');
    driver.findElement(webdriver.By.className('wpcf7-form-control')).submit();
    driver.wait(() => {
        var errorMessage = driver.wait(until.elementLocated(By.className('wpcf7-response-output wpcf7-display-none wpcf7-spam-blocked')), 3000);
        return errorMessage;
    }, 3000);
    });

    test.after(function() {
        driver.quit();
    });
});