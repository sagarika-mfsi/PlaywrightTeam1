/*import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import java.util.*;

public class Example {
  public static void main(String[] args) {
    try (Playwright playwright = Playwright.create()) {
      Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
        .setHeadless(false));
      BrowserContext context = browser.newContext(new Browser.NewContextOptions()
        .setViewportSize(500, 500));
      Page page = context.newPage();
      page.navigate("https://www.amazon.com/");
      page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Shop kitchen must-haves")).click();
      page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Apply KitchenAid filter to")).click();
      page.getByRole(AriaRole.LISTITEM, new Page.GetByRoleOptions().setName("1 of 4")).getByRole(AriaRole.BUTTON, new Locator.GetByRoleOptions().setName("Add to cart")).click();
      page.getByText("in cart").click();
      assertThat(page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("This item has a minimum order"))).isVisible();
      assertThat(page.getByRole(AriaRole.LISTITEM, new Page.GetByRoleOptions().setName("1 of 4")).getByRole(AriaRole.HEADING, new Locator.GetByRoleOptions().setName("Sponsored Ad - KitchenAid"))).matchesAriaSnapshot("- text: /KitchenAid Stainless Steel Utility Tongs, \\d+ Inch/");
    }
  }
}
  */