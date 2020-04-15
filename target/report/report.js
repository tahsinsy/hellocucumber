$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/hellocucumber/featureOne.feature");
formatter.feature({
  "name": "Test Smoke scenerio for mtb home page using data table with sets of data",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test MTB.com with invalid user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in \"https://www.mtb.com/home-page\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters userName with \u003cUserName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user enters password with  \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "name": "user is expected to see error message with \u003cExpected\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Expected"
      ]
    },
    {
      "cells": [
        "Abhi",
        "password1",
        "You have entered an invalid User ID and/or Passcode. Please try again. chhah"
      ]
    },
    {
      "cells": [
        "Josh",
        "password2",
        "You have entered an invalid User ID and/or Passcode. Please try again.hahhah"
      ]
    },
    {
      "cells": [
        "Tahsin",
        "password3",
        "You have entered an invalid User ID and/or Passcode. Please try again."
      ]
    },
    {
      "cells": [
        "Aziz",
        "password4",
        "You have entered an invalid User ID and/or Passcode. Please try again."
      ]
    },
    {
      "cells": [
        "Paul",
        "password4",
        "You have entered an invalid User ID and/or Passcode. Please try again."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test MTB.com with invalid user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in \"https://www.mtb.com/home-page\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_is_in_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters userName with Abhi",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_enters_username_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password with  password1",
  "keyword": "And "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_enters_password_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is expected to see error message with You have entered an invalid User ID and/or Passcode. Please try again. chhah",
  "keyword": "Then "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_is_expected_to_see_error_message_with(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[contains(text(),\u0027You have entered an invalid User ID and/or Passcod\u0027)]\"}\n  (Session info: chrome\u003d80.0.3987.163)\n  (Driver info: chromedriver\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5),platform\u003dMac OS X 10.15.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Tahsins-MacBook-Pro.local\u0027, ip: \u00272604:6000:7a42:5500:1c27:734b:fe39:4866%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50757}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609545 (c2f88692e98ce7233d2df7c724465ecacfe74df5), userDataDir\u003d/var/folders/xd/s96ww2qn7vv4zq9g8xq_np_80000gn/T/.org.chromium.Chromium.bODWHO}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d80.0.3987.163, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 64b927133039df9ccae921afbaf2999a\n*** Element info: {Using\u003dxpath, value\u003d//p[contains(text(),\u0027You have entered an invalid User ID and/or Passcod\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat hellocucumber.StepDefinitions.user_is_expected_to_see_error_message_with(StepDefinitions.java:121)\n\tat ✽.user is expected to see error message with You have entered an invalid User ID and/or Passcode. Please try again. chhah(file:///Users/macbookpro/Desktop/BDD_Master/hellocucumber/src/test/resources/hellocucumber/featureOne.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test MTB.com with invalid user login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in \"https://www.mtb.com/home-page\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_is_in_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters userName with Josh",
  "keyword": "When "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_enters_username_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password with  password2",
  "keyword": "And "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_enters_password_with(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login",
  "keyword": "And "
});
formatter.match({
  "location": "hellocucumber.StepDefinitions.user_click_on_login()"
});
