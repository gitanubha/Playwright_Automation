import { test } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';
import {ticketDashboard} from '../pageObject/ticketDashboard';

test('@UI Count Ticket with status', async ({ page }) => {
  const ticketdashboard = new ticketDashboard(page);
  const loginPage = new LoginPage(page);
  const username = 'anu.gaur2510@gmail.com'
  const password = 'Testing123'
  const memberName = 'Anubha Gaur'
  const titlename = 'New ticket for demo'

  
  await loginPage.visit();         // Ensure page is open before interacting
  await loginPage.login(username,password);         // Interact only after navigation
  await loginPage.verifyLogin(memberName)

  await ticketdashboard.selectStatus("New")
  const rowcount = await ticketdashboard.countRowsWithStatus();
  console.log(`Total tickets with status: ${rowcount}`);

});