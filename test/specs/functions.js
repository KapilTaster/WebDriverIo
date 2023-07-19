describe('mouse hover', async () => {
    xit('scrolling', async () => {
        await browser.url("https://www.amazon.ca/")
        // await $("//div[@class='nav-logo-base nav-sprite']").scrollIntoView()
        await $("#nav-link-accountList-nav-line-1").moveTo()
        await browser.pause(5000)
        const logo = await $("//span[normalize-space()='Your Account']")
        await logo.click();

        await browser.pause(3000)

    })

    xit('alerts', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("//input[@id='name']").setValue("kapil")
        await browser.pause(3000)
        const alert = await $("//input[@id='confirmbtn']")
        await alert.click();
        console.log(await alert.getAlertText())
        await browser.acceptAlert();

        await browser.pause(2000)



    })
    xit('webTbale', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $("//a[@class='blinkingText']").click();
        await browser.pause(6000)
        var handles = await browser.getWindowHandles()        
        await browser.switchToWindow(handles[1])
        console.log(await browser.getTitle())
        await browser.closeWindow();
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())


    })
    xit('windows', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/#/offers")
        await $("//button[@id='openwindow']").click();
        await browser.pause(3000)
        var handles = browser.getWindowHandles()
        // for (var x of handles)
        // {
        //     console.log( await x)
        // }
        await browser.window
        await $("//a[@class='active']").click();
        await browser.pause(3000)



    })

    it('Frames' , async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/#/offers")
        await $("//button[@id='mousehover']").scrollIntoView();
        console.log(await $$("a").length) 
        await browser.switchToFrame(await $("[id ='courses-iframe']"));
        var titile=await $("=Courses")
        console.log(await titile.getTagName())
        console.log(await $$("a").length) 
        await browser.switchToFrame(null)
        console.log(await $$("a").length) 
    })
})