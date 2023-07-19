const expect= require ('chai').expect;
const loginpage=require('../pageobjects/login.page')

describe("ecomerce functionality", async () => {


    it("login functionality", async () => {
        const product = ['Samsung Note 8', 'Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow();

        login.page.login("rahulshettyacedmy","learning")
        
        await browser.pause(3000)
        const items = await $$("div[class='card h-100']")

        for (var i = 0; i < items.length; i++) {
            const item_name = await items[i].$("div h4 a")
            if (product.includes(await item_name.getText())) {
                await items[i].$(".card-footer button").click();
            }
        }
        await $("//a[@class='nav-link btn btn-primary']").click();

        var list_price = await $$("//table[@class='table table-hover']/tbody/tr/td[3]")

        for (var x of list_price) {
            console.log(await x.getText())
        }
        async function calculateTotal() {
            const parsedIntegers = await Promise.all(
                list_price.map(async (list_price) => {
                    const text = await list_price.getText();
                    const substr = text.split(".")[1];
                    return parseInt(substr ? substr.trim() : 0);
                })
            );
            return parsedIntegers.reduce((acc, curr) => acc + curr, 0);
        }

        const total = await calculateTotal();
        console.log(total);
        const total_value = await $("h3 strong").getText();
        const final_value = parseInt((await total_value).split(".")[1].trim())
        //await expect (total).to.equal(final_value)
        await $("//button[normalize-space()='Checkout']").click();
        await $("//input[@id='country']").setValue("ind")
        await $(".lds-ellipsis").waitForExist({ reverse: true })
        await $("//div[@class='suggestions']/ul[1]/li/a").click();
        await $("//label[@for='checkbox2']").click();
        await $("//input[@value='Purchase']").click();
        await expect($("//div[@class='alert alert-success alert-dismissible']"))
            .toHaveTextContaining(" Thank you! Your order will be delivered in next few weeks")

        await browser.pause(2000)


    })
})

 // const total = (await Promise.all(await list_price.map(async (list_price) => 
        // {
        //     const text=( (await parseInt((await list_price.getText())).split(".")[1]))
        //     return parseInt( await text ? text.trim():0).reduce((acc, curr) => acc + curr, 0);

        // }
        // )))

        //return parseInt(total ? total.trim():0).reduce((acc, curr) => acc + curr, 0);
        //const total_trim= (total? total.trim():0);

        //console.log(await text)
        //.trim()))))).reduce((acc,curr)=>{acc+curr}) 
