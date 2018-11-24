/* eslint-env jest */
describe("CounterComponentTest", () => {
  it("visually looks correct", async () => {
    // APIs from jest-puppeteer
    await page.goto(
      "http://localhost:9001/iframe.html?selectedKind=CountComponent&selectedStory=CountComponent"
    );
    const image = await page.screenshot();
    // API from jest-image-snapshot
    expect(image).toMatchImageSnapshot();
  });
});
