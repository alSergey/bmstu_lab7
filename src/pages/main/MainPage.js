import {StockPage} from "../stock/StockPage.js";
import {StockCardComponent} from "../../components/stock-card/StockCardComponent.js";
import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    async getData() {
        return ajax.get(urls.stocks())
    }

    clickCard(e) {
        const cardId = e.target.dataset.id

        const stockPage = new StockPage(this.parent, cardId)
        stockPage.render()
    }

    get page() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    async render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = await this.getData()
        data.data.forEach((item) => {
            const stockCard = new StockCardComponent(this.page)
            stockCard.render(item, this.clickCard.bind(this))
        })
    }
}