import { Page, Locator } from "@playwright/test";

export class SearchMapPage {
  readonly page: Page;
  readonly dropdownOptions: Locator;
  readonly sidebarWrapper: Locator;
  readonly sidebarItems: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dropdownOptions = page
      .locator(".dropdown-popup-row")
      .filter({ visible: true });

    this.sidebarWrapper = page.locator(".map-list-wrapper");
    this.sidebarItems = page.locator(".map-list-item");
  }

  async navigate() {
    await this.page.goto("./");
  }

  //Generic method so any filter can use to handle this frequent change in filter and logic and layout
  private getDropdownByLabel(labelName: string): Locator {
    return this.page
      .locator(".columns-item")
      .filter({
        has: this.page.locator("label").getByText(labelName, { exact: true }),
      })
      .locator(".dropdown-container");
  }

  // Selects a random value from any dropdown specified by label

  async selectRandomValueFrom(labelName: string) {
    const dropdown = this.getDropdownByLabel(labelName);

    await dropdown.click();
    await this.page.waitForLoadState("networkidle");

    await this.dropdownOptions.first().waitFor({ state: "visible" });

    const count = await this.dropdownOptions.count();

    const randomIndex =
      count > 1 ? Math.floor(Math.random() * (count - 1)) + 1 : 0;

    await this.dropdownOptions.nth(randomIndex).click();
  }

  async getSidebarCount(): Promise<number> {
    await this.sidebarWrapper.waitFor({ state: "visible" });
    return await this.sidebarItems.count();
  }
}
