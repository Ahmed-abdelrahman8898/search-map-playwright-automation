import { test, expect } from "@playwright/test";
import { SearchMapPage } from "../pages/SearchMapPage";

test("Filter updates the map list results", async ({ page }) => {
  const searchMapPage = new SearchMapPage(page);
  await searchMapPage.navigate();
  //click on the cookies popup
  await page.getByRole("button", { name: "Accept All" }).click();
  //u can choose any filter by just passing its name
  await searchMapPage.selectRandomValueFrom("Alter");
  await searchMapPage.selectRandomValueFrom("Verfahren");
  const count = await searchMapPage.getSidebarCount();
  //for logs and debugging
  console.log(`Successfully found ${count} items after filtering.`);

  expect(count).toBeGreaterThan(0);
});
