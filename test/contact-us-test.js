var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerators');

describe("Test Contact Us Page", () => {  
    it("Should navigate and test Contact Us Page ", () => {
      browser.url('./');
      expect(browser.getTitle()).to.equal('WebDriverUniversity.com');
      expect(browser.getUrl()).to.equal('http://www.webdriveruniversity.com/');

      // const clickByCss = $('#contact-us h1');
      // clickByCss.click();
      browser.waitAndClick('#contact-us h1');

      browser.switchWindow('WebDriver | Contact Us');
      
      // const firstNameSelector = $("form#contact_form > input[name='first_name']");
      // const lastNameSelector = $("form#contact_form > input[name='last_name']");
      // const emailSelector = $("form#contact_form > input[name='email']");
      // const commentSelector = $("form#contact_form > textarea[name='message']");
      // firstNameSelector.addValue(config.firstName);
      // lastNameSelector.addValue(config.lastName);
      // emailSelector.addValue ('c@mail.com');
      // commentSelector.addValue('dog');
      browser.waitAndSendKeys("form#contact_form > input[name='first_name']", config.firstName);
      browser.waitAndSendKeys("form#contact_form > input[name='last_name']", config.lastName);
      browser.waitAndSendKeys("form#contact_form > input[name='email']", dataGenerators.generateRandomEmailAddress());
      browser.waitAndSendKeys("form#contact_form > textarea[name='message']", dataGenerators.generateRandomString());
      
      // $("div#form_buttons > input:nth-of-type(2)").click();
      browser.waitAndClick("div#form_buttons > input:nth-of-type(2)");

      expect($("div#contact_reply > h1").getText()).to.contain("Thank You for your Message!");
    });
  });