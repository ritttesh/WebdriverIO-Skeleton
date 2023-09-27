describe("test suite 5",()=>{
    it("accept alert",async ()=>{
        browser.url("https://demo.automationtesting.in/Alerts.html");
        browser.maximizeWindow();
        await $("//*[@id='OKTab']/button").click()
        browser.acceptAlert()

     })

     it("dismiss alert",async ()=>{
        browser.url("https://demo.automationtesting.in/Alerts.html");
        browser.maximizeWindow();
        await $("/html/body/div[1]/div/div/div/div[1]/ul/li[2]/a").click()
        await $("//*[@id='CancelTab']/button").click()
        browser.dismissAlert()
     })

     it("alert text",async ()=>{
        browser.url("https://demo.automationtesting.in/Alerts.html");
        browser.maximizeWindow();
        await $("/html/body/div[1]/div/div/div/div[1]/ul/li[3]/a").click()
        await $("//*[@id='Textbox']/button").click()
        console.log(browser.getAlertText())
     })
 })