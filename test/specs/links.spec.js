describe("test suite 3",()=>{
    it("get all the links from the webpage",async ()=>{
         browser.url("");
         browser.maximizeWindow();
         const links=await $$("a")
         for(const link of links){
             console.log(link.getAttribute("href"))
         }
     })
 })