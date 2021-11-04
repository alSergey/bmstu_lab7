class Urls {
    constructor() {
        this.url = 'http://localhost:8000/';
    }

    stocks() {
        return `${this.url}stocks/`
    }

    stock(id) {
        return `${this.url}stocks/${id}/`
    }
}

export const urls = new Urls()