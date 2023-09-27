class DragAndDrop{
    get origin(){
        return $("//*[@id='gallery']//li[1]//img")
    }

    get target(){
        return  $("#trash")
    }

    async dragAndDrop(){
        await browser.action('pointer').move(this.origin).down({button:0}).move(this.target).up({button:0}).perform()
    }
}
module.exports = new DragAndDrop();