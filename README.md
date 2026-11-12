# Central bank exchange rate fixing
1. Retrieves the latest currency exchange rates from the Czech National Bank;
2. Parses the downloaded data and clearly displays a list to the user in the UI;
3. Added a simple form, into which the customer can enter an amount in CZK and select a currency, and after submitting (in real-time) sees the amount entered in CZK converted into the selected currency.
4. Styled inspiring by https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/index.html
3. Added automated tests to ensure the solution is working correctly (`/tests`).
4. Added CI with Github actions (lint, build, tests) on PRs to `main` branch `.github`;
5. Deployed the app so it can be viewed online https://gleaming-fenglisu-82e80a.netlify.app/. Added CD with Netlify on `main` branch merge.
