const puppeteer = require('puppeteer');

async function scrape() {
    const asset = process.argv[2]
    if (!asset) return console.log('Please enter asset name. ex. `node node.js BEQSSF` ')

    try {
        const browser = await puppeteer.launch();
        const [page] = await browser.pages();
        const url = 'https://codequiz.azurewebsites.net/'
        await page.goto(url);
        await page.click("input[type=button]");
        await page.waitForSelector('body > table')

        const list = await page.evaluate(() => {
            const result = []
            for (let i = 2; i < 100; i++) {
                const name = document.querySelector(`body > table > tbody > tr:nth-child(${i}) > td:nth-child(1)`)
                const value = document.querySelector(`body > table > tbody > tr:nth-child(${i}) > td:nth-child(2)`)

                if (!name || !value) break

                result.push({ name: name.innerHTML.trim(), value: value.innerHTML })
            }
            return result
        });

        const assetIem = list.find(item => item.name === asset)
        if (assetIem) {
            await browser.close();
            console.log(list.find(item => item.name === asset).value)
        } else {
            console.log(`Error: ${asset} - asset not found`)
        }
    } catch (err) {
        console.error(err);
    }
    process.exit()
};

scrape.apply(this);