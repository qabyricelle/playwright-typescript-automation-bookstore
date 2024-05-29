import { test, expect } from "../fixture/base"

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

test("User searches for a book by its title", async ({ page, bookStore, search }, testInfo) => {
    await bookStore.searchProduct(search.book)
    await page.waitForLoadState("networkidle")
    expect(await bookStore.bookTitle.textContent()).toEqual(search.book)

    await testInfo.attach("search-by-title", {
        body: await page.screenshot(),
        contentType: "image/png"
    })
})

test("User searches for a book by its author", async ({ page, bookStore, search }, testInfo) => {
    await bookStore.searchProduct(search.author)
    await page.waitForLoadState("networkidle")
    expect(await bookStore.bookAuthor.textContent()).toContain(search.author)

    await testInfo.attach("search-by-author", {
        body: await page.screenshot(),
        contentType: "image/png"
    })
})

test("User searches for a book by its price", async ({ page, bookStore, search }, testInfo) => {
    await bookStore.searchProduct(search.price)
    await page.waitForLoadState("networkidle")
    expect(await bookStore.bookPrice.textContent()).toContain(search.price)

    await testInfo.attach("search-by-price", {
        body: await page.screenshot(),
        contentType: "image/png"
    })
})






