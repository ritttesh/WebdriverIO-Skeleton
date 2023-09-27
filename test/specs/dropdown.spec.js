describe("test suite 4",()=>{
    it("dropdown menues",async ()=>{
         await browser.url("https://chercher.tech/practice/practice-dropdowns-selenium-webdriver");
         await browser.maximizeWindow();
         await $$("#first")[1].selectByVisibleText("Google")	
     })

     it("dropdown menues2",async ()=>{
        await browser.url("https://chercher.tech/practice/practice-dropdowns-selenium-webdriver");
        await browser.maximizeWindow();
        await $("#animals").selectByAttribute('value','avatar')
    })
 })