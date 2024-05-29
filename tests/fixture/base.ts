import { test as base } from "@playwright/test"
import { BookStorePage } from "../page/bookstore"
import search from "../util/search"

type Fixtures = {
    search: any
    bookStore: BookStorePage
}

export const test = base.extend<Fixtures>({
    search: search,
    bookStore: async ({ page }, use) => {
        await use(new BookStorePage(page))
    }
})

export { expect } from "@playwright/test"