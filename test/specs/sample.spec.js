describe("test suite",()=>{
    it("test case1",async ()=>{
        await browser.url("https://google.com")
        await $('[id=APjFqb]').setValue('Webdriverio')
        await expect($('[id=APjFqb]')).toHaveValue('WebdriverIO',{ ignoreCase: true })
       // browser.pause(5000)

    })
    // it('should wait until text has changed', async () => {
    //     const elem = await $('.gb_B')
    //     await elem.waitUntil(async function () {
    //         return (await this.getText()) === 'gmail'
    //     }, {timeout:3000,timeoutMsg:'not found'})
    // })
})