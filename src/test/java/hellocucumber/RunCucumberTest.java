package hellocucumber;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

import java.io.File;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/macbookpro/Desktop/BDD_Master/hellocucumber/src/test/resources/hellocucumber/featureOne.feature", plugin = {
		"pretty", "html:target/report" }, glue = "classpath:hellocucumber")
public class RunCucumberTest {

}

//	"pretty","html:target/report" 