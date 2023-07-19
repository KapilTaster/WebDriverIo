class loginpagePractise {
    get  username() 
    {
        return $("//input[@id='username']")

    }
    get password()
     {
        return $("//input[@id='password']")
    }

    get click() 
    {
        return $("//input[@id='signInBtn']")
    }
    async login( username,  password)
     {
        await this.username.setvalue(username)
        await this.password.setvalue(password)
        await this.click();
    }

}
module.export = new login.page()

