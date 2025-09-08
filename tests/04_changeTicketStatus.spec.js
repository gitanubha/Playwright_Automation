//@ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';
import {ticketDashboard} from '../pageObject/ticketDashboard';

test('@UI Change the status of the ticket', async ({ page }) => {
  const ticketdashboard = new ticketDashboard(page);
  const loginPage = new LoginPage(page);
  const username = 'anu.gaur2510@gmail.com'
  const password = 'Testing123'
  const memberName = 'Anubha Gaur'
  const titlename = 'New ticket for demo'

  
  await loginPage.visit();         // Ensure page is open before interacting
  await loginPage.login(username,password);         // Interact only after navigation
  await loginPage.verifyLogin(memberName);

  await ticketdashboard.getRowTitleText();

});
