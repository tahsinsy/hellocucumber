Feature: Test Smoke scenerio for mtb home page using data table with sets of data

Scenario Outline: Test MTB.com with invalid user login 
	Given user is in "https://www.mtb.com/home-page" page 
	When  user enters userName with <UserName>
	And   user enters password with  <Password>  
	And   user click on login 
	Then  user is expected to see error message with <Expected>
	And   close browser
	
		
Examples:
|UserName |Password |Expected|
|Abhi  |password1|You have entered an invalid User ID and/or Passcode. Please try again. chhah|
|Josh  |password2|You have entered an invalid User ID and/or Passcode. Please try again.hahhah|
|Tahsin|password3|You have entered an invalid User ID and/or Passcode. Please try again.|
|Aziz |password4|You have entered an invalid User ID and/or Passcode. Please try again.|
|Paul |password4|You have entered an invalid User ID and/or Passcode. Please try again.|
	
	
