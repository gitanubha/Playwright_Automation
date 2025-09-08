import {test, expect, Locator, Page} from '@playwright/test';

export class ticketDashboard{

    constructor(page){
        
        this.page = page;
        this.newButton = page.locator(".m_811560b9.mantine-Button-label");
        this.authorname = page.locator("[name='authorName']");
        this.title = page.locator("[name='title']");
        this.description = page.locator("[name='body']");
        this.submit = page.locator("[type ='submit']");
        this.status = page.locator('[data-testid="ticket-status-select"]');
        this.verifyauthorname = page.locator('span.mantine-Text-root')
        this.rows = page.locator('[data-testid="ticket-status"]');
        this.statusDropdown = page.locator('[data-testid="ticket-status-select"]');
        this.dropdownOptions = page.locator('div[data-combobox-option="true"]');
        this.changestatus = page.locator('[id="mantine-bnk5p0nr4"]');
        this.selectNewStatus = page.locator("[id='mantine-czq422gv9']");
        this.addComment = page.locator("[name='body']")
        this.sendButton = page.locator("[type = 'submit']")
        this.tickeTable =page.locator();
    }

    getTicketTitleLocator(titlename) {
    return this.page.locator(`//p[normalize-space()='${titlename}']`);
    }


    async createTicket(titlename){

        await this.newButton.click();
        await this.authorname.fill('TestingUser');
        await this.title.fill(titlename)
        await this.description.fill('This is a demo description for this application')
        await this.submit.click()
    }

    async verifyTicketCreated(titlename) {

    const ticketTitle = this.getTicketTitleLocator(titlename);
    await expect(ticketTitle).toBeVisible();
    await expect(this.status).toHaveText('New');

    }

    async selectStatus(status) {
    await this.statusDropdown.click();
    await this.page.locator(`div[data-combobox-option="true"] >> text=${status}`).click();
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForTimeout(5000);
    
    }

async countRowsWithStatus() {
    return this.rows.count();

}

async getRowTitleText(titlename,newStatus){

await this.page.getByText(titlename).click();
await this.selectNewStatus.selectOption(newStatus)
await this.addComment.fill('added new test comment')
await this.sendButton.click()
}

async verifyCommentIcon(titlename){
   const row = await page.locator("(//div[@class='m_6d731127 mantine-Stack-root'])[5]", { hasText: 'Ticket #123: Login issue' })
   const icon = row.locator('[data-testid="comment-icon"]');

   // 4. Assert the icon is visible
   await expect(icon).toBeVisible();

  // 5. Optionally, get the comment count
  const countText = await icon.textContent();
  const commentCount = parseInt(countText || '0', 10);
  console.log('Comment count:', commentCount);


}

}

