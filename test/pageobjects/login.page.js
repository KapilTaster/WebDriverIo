// login.page.js
class LoginPage {
    constructor() {
      // Define web elements used on the login page
      this.usernameInput = $("#username");
      this.passwordInput = $("#password");
      this.loginButton = $("button[type='submit']");
    }
  
    async login(username, password) {
      // Enter the username and password, then click the login button
      await this.usernameInput.setValue(username);
      await this.passwordInput.setValue(password);
      await this.loginButton.click();
    }
  }
  
  export default LoginPage;
  