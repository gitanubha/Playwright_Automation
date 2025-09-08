//@ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';

test('@UI Login Demo SaaS account', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const username = 'XXX@gmail.com'
  const password = 'Testing123'
  const memberName = 'David John'

  
  await loginPage.visit();         // Ensure page is open before interacting
  await loginPage.login(username,password);         // Interact only after navigation
  await loginPage.verifyLogin(memberName)   // Validate login
});

