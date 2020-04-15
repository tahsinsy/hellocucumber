package hellocucumber;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.*;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

public class StepDefinitions {

	
	DesiredCapabilities caps = new DesiredCapabilities();
	protected static WebDriver driver2;

	@Given("user is in {string} page")
	public void user_is_in_page(String string) {
		System.setProperty("webdriver.gecko.driver", "/Users/macbookpro/Downloads/geckodriver 3");
		System.setProperty("webdriver.chrome.driver",
				"/Users/macbookpro/git/Selenium_exe/sel/src/main/java/chromedriver");
		driver2 = new ChromeDriver();
		driver2.get(string);

	}

	@Given("^browser stack is set(.+)$")
	public void browser_stack_is_set(String browser) {
		caps.setCapability("browser", browser);
	}

	@And("^browser_version is set (.+)$")
	public void browserversion_is_set(String brversion) {
		caps.setCapability("browser_version", brversion);
	}

	@And("^os is set(.+)$")
	public void os_is_set(String os) {

		caps.setCapability("os", os);
	}

	@And("^os version is set(.+)$")
	public void os_version_is_set(String osversion) {
		caps.setCapability("os_version", osversion);
	}

	@And("^name is set (.+)$")
	public void name_is_set(String name) throws Throwable {
		caps.setCapability("resolution", "1024x768");
		caps.setCapability("name", name);
	}

	@And("^go to page (.+)$")
	public void go_to_page(String nameUrl) throws Exception {
		WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
		driver.get(nameUrl);

	}

//	@When("user enters userName with {string}")
//	public void user_enters_userName_with(String string) {
//
//		driver2.findElement(By.xpath(HomePage.userName)).sendKeys(string);
//
//	}

//	@When("user enters password with {string}")
//	public void user_enters_password_with(String string) {
//		driver2.findElement(By.xpath(HomePage.password)).sendKeys(string);
//
//	}

//	@When("user click on login")
//	public void user_click_on_login() throws Exception {
//		driver2.findElement(By.xpath(HomePage.loginButton)).click();
//		Thread.sleep(5000);
//
//	}

//	@Then("user is expected to see error message with {string}")
//	public void user_is_expected_to_see_error_message_with(String string) {
//
//		String error = driver2.findElement(By.xpath(HomePage.errorMessage)).getText();
//		Assert.assertEquals(error, string);
//
//	}

	@When("^user enters userName with (.+)$")
	public void user_enters_username_with(String username) {
		driver2.findElement(By.xpath(HomePage.userName)).sendKeys(username);

	}

	@And("^user enters password with (.+)$")
	public void user_enters_password_with(String password) {
		driver2.findElement(By.xpath(HomePage.password)).sendKeys(password);
	}

	@And("^user click on login$")
	public void user_click_on_login() throws Exception {
		driver2.findElement(By.xpath(HomePage.loginButton)).click();
		Thread.sleep(6000);
	}

	@Then("^user is expected to see error message with (.+)$")
	public void user_is_expected_to_see_error_message_with(String expected) {

		String error = driver2.findElement(By.xpath(HomePage.errorMessage)).getText();

		if (error.equals(expected)) {

			System.out.println("passed");

		}

		else {
			driver2.close();
			Assert.assertEquals(error, expected);

		}

	}

	@And("^close browser$")
	public void close_browser() {
		System.out.println("close browser method executed");
		driver2.close();

	}

}
