const { expect } = require('@wdio/globals')
const DragDrop=require("../pageobjects/dragAndDropPom.page")


describe('test suite 2',()=>{
    it.skip("test case 1",async ()=>{
        browser.url("https://www.globalsqa.com/demo-site/draganddrop/")
        const origin= await $("//*[@id='gallery']//li[1]//img")
        await expect(origin).toBeDisplayed
         const target=await $("#trash")
        //await origin.dragAndDrop(target)
        await browser.action('pointer').move(origin).down({button:0}).move(target).up({button:0}).perform()
        expect($("//*[@id='trash']/ul/li[1]")).toBeDisplayed()
    })
    
    it.skip("test case 3",async ()=>{
        browser.url("https://demo.automationtesting.in/Static.html")
        const origin= await $("//*[@id='angular']")
        const target=await $('#droparea')
        await browser.action('pointer').move(origin).down({button:0}).move(target).up({button:0}).perform()
        //await origin.dragAndDrop(target)
       
    })
    //pom
    it("test case 4",async ()=>{
        browser.url("https://demo.automationtesting.in/Static.html")
        DragDrop.dragAndDrop()
       
    })
    

})