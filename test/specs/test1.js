describe('Ecomerce website',async()=>
{
it('Login Functionality', async()=>
{
 
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await browser.pause(3000)  
    console.log( await browser.getTitle());
    await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
    await browser.pause(3000)    ;
    await $("input[name='username']").setValue("rahulshettyacademy")
    await $("//input[@name='password']").setValue("learning")
    await $("#signInBtn").click()
//     await browser.pause(3000)
    
//    await console.log(await $("//strong[normalize-space()='Incorrect']").getText())
//    await expect($ ("p").toHaveText("(username is rahulshettcademy and Password is learning)"))

await $(".btn-primary").waitForExist()

await expect (browser).toHaveUrlContaining("shop")




}

)
})