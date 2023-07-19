//import {expect as expectchai } from 'chai';
//var expectchai = require ('chai').expect


describe("login functionality", async function () {

    xit("enter the value", async function () {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.pause(3000)
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
        await $("input[name='username']").setValue("rahulshettyacademy")
        await $("//input[@name='password']").setValue("learning")
        const radiobutton = await $$(".radiotextsty")
        const radio_click = radiobutton[1].click()
        const modal = await $(".modal-content")
        await modal.waitForDisplayed();

        await $("//button[@id='okayBtn']").click()
        //await browser.pause(5000) 
        // console.log((await $("//label[@class='customradio'] // input[@value='user']")).isSelected() )
        //await browser.pause(3000)
        const dropdown = await $("select.form-control")
        await dropdown.selectByAttribute('value', 'teach')
        await browser.pause(1000)
        await dropdown.selectByVisibleText("Consultant")
        await browser.pause(1000)
        await dropdown.selectByIndex(0)
        await browser.pause(1000)
        const get_value = (await dropdown.getValue())
        console.log(get_value)
        //expectchai(get_value).to.equal('Stud')
    })

    xit('Dyanamic DropDown', async () => {

        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const box = await $("#autocomplete")
        box.setValue("ind")
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] ")
        for (var i of items) {
            if (await i.getText() === 'India') {
                await i.click();

            }
        }
        const chkbox = await $("#checkBoxOption1")
        chkbox.click();
        await browser.pause(3000)
        console.log((await chkbox.isSelected()))
        await browser.saveScreenshot("page.png")



    })

    it('other functionality', async () => {

        await browser.url("https://www.w3schools.com/html/html_tables.asp")

        var value = await $$("//table[@id='customers'] /tbody/tr[2]/td").getText();

        for(var i of value )
        {
            console.log(await i)
        }


        






    })
})