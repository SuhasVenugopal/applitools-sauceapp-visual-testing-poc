import { test, expect } from '@applitools/eyes-playwright/fixture';

  // Retrieve sensitive data from environment variables
  const username = process.env.SAUCE_USERNAME!;
  const password = process.env.SAUCE_PASSWORD!;
  const firstname = process.env.FIRSTNAME!;
  const lastname = process.env.LASTNAME!;
  const pin = process.env.PIN!;


test('saucedemo login page', async ({ page, eyes }) => {
  // Navigate to the saucedemo login page
  await page.goto('https://www.saucedemo.com/');

  // Visual checkpoint #1
  await eyes.check('Login Page', { fully: true });



  // Perform login action
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');

  // Visual checkpoint #2
  await eyes.check('Inventory Page', { fully: true });

  // Perform assertions to verify homepage elements
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page).toHaveTitle('Swag Labs');

  // Sort products by alphabetical order (Reverse Z to A)
  await page.selectOption('.product_sort_container', 'za');

   //Visual checkpoint #3
  await eyes.check('Products Sorted in Reverse Alphabetical Order', { fully: true });

  // Sort products by price (Low to High)
  await page.selectOption('.product_sort_container', 'lohi');

    //Visual checkpoint #4
  await eyes.check('Products Sorted Low to High', { fully: true });
  
  // Add first and third items to the cart
  await page.click('.inventory_item:nth-child(1) button');
  await page.click('.inventory_item:nth-child(3) button');
  
  // Check for shopping cart icon visibility
  await expect(page.locator('.shopping_cart_link')).toBeVisible();

  // Visual checkpoint #5
  await eyes.check('shopping cart icon check', {
  region: page.locator('.shopping_cart_link'),});


  // Navigate to the shopping cart page
  await page.click('.shopping_cart_link');

  //Visual checkpoint #6
  await eyes.check('Shopping Cart with Items', { fully: true });

  // Proceed to checkout
  await page.click('#checkout');

  // Leave the first name field empty and fill in other details
  await page.fill('#last-name', lastname);
  await page.fill('#postal-code', pin);
  await page.click('#continue');

  // Verify that the appropriate error message is displayed
  const error = page.locator('[data-test="error"]');
  await expect(error).toBeVisible();
  await expect(error).toHaveText('Error: First Name is required');

  // Visual checkpoint #7
  await eyes.check('Error Message for Missing First Name', { fully: true });

  // Fill in all required details correctly
  await page.fill('#first-name', firstname);
  await page.fill('#last-name', lastname);
  await page.fill('#postal-code', pin);

  await page.click('#continue');

  // Visual checkpoint #8
  await eyes.check('Checkout Overview', { fully: true });

  // Complete the purchase
  await page.click('#finish');


  // Verify that the order confirmation message is displayed
  const header = page.locator('[data-test="complete-header"]');
  await expect(header).toBeVisible();
  await expect(header).toHaveText('Thank you for your order!');

  // Visual checkpoint #9
  await eyes.check('Order Confirmation Page', { fully: true });
});