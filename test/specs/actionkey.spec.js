//import {Key} from 'Webdriverio'
const { expect } = require('@wdio/globals')
describe("action testsuite",()=>{
    it("key action",async ()=>{
        await browser.url("https://google.com")
        browser.maximizeWindow()
        const ele=await $("#APjFqb")
        await ele.click()
        await browser.action('key').down('w').up('w').perform()
    })
    // it("mouse action",async ()=>{
    //     const elem = await $('.gb_B')
    //     await elem.click()
    //     //console.log(await browser.getUrl())
    //     browser.waitUntil(async ()=>{
    //         return await $('.mobile-before-hero-only').isDisplayed()
    //     },{timeout:5000,timeoutMsg:"not founf the logo"})
        
       
        
    // })
})