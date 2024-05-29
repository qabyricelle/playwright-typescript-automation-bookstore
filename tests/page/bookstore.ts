import { Locator, Page } from "@playwright/test"

export class BookStorePage {

    readonly page: Page
    readonly searchBar: Locator
    readonly searchButton: Locator
    readonly bookList: Locator
    readonly bookTitle: Locator
    readonly bookAuthor: Locator
    readonly bookPrice: Locator

    constructor (page: Page) {
        this.page = page
        this.searchBar = page.getByRole("textbox", { name: "Filter books"})
        this.bookList = page.getByRole("list").locator(".ui-first-child:visible")
        this.bookTitle = this.bookList.getByRole("heading")
        this.bookAuthor = this.bookList.getByRole("paragraph").nth(0)
        this.bookPrice = this.bookList.getByRole("paragraph").nth(1)
    }

    async searchProduct (search: string) {
        await this.searchBar.fill(search)
    }
}