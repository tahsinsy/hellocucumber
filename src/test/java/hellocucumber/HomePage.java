package hellocucumber;

//	//https://stackoverflow.com/questions/52070792/how-to-execute-only-few-random-examples-for-scenario-outline

public class HomePage {
	
	public static String userName = "//input[@id='OLB_UserId_Widget']";
	
	public static String password = "//input[@id='OLB_Passcode_Widget']";
	
	public static String loginButton = "//form[@class='form-inline']//button[@id='btnLoginWebBanking']";
	
	public static String errorMessage = "//p[contains(text(),'You have entered an invalid User ID and/or Passcod')]";

}
