const puppeteer = require("puppeteer");

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span [title='Nombre del contacto']");
    const target=await page.$("span [title='Nombre del contacto']");
    await target.click();
    const inp=await page.$(
       "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
    );

    for(let i = 0; i < 150; i++){
        await inp.type("Mensaje");
        await page.keyboard.press("Enter");
    }
}

scrape("https://web.whatsapp.com/");

