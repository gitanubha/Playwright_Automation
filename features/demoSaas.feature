Feature: Demo app functionality validation

Scenario: Create new ticket
Given User login with "username" and "Password"
When Create new ticket with "titlename"
Then Verify New ticket is created