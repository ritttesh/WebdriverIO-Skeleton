describe("test suite 6",()=>{
    it("browser assertion",async ()=>{
         browser.url("https://www.google.co.in/");
         browser.maximizeWindow();
         expect(browser).toHaveUrl("https://www.google.co.in/")
         expect(browser).toHaveUrlContaining("google")
         expect(browser).toHaveTitle("Google")
     })
 it("element assertion",async ()=>{
         browser.url("https://www.google.co.in/");
         browser.maximizeWindow();
         const ele=await $("#hplogo")
         await expect(ele).toHaveAttribute('class','lnXdpd')
         await expect(ele).toHaveId("hplogo")
         await expect(await $("/html/body/div[1]/div[6]/div[1]")).toHaveText("India")
         await expect(await $("//*[@id='gb']/div/div[1]/div/div[1]/a")).toHaveHref("https://mail.google.com/mail/&ogbl")
     })
 })