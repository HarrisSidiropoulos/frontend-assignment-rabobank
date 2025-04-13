# Frontend Transactions App

This is an Angular monorepo project that includes a frontend application (`transactions-app`) and a backend server (`backend-app`) for serving and managing transactions.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Nx CLI](https://nx.dev/) (optional, for running Nx commands globally)

```bash
npm install -g nx
```

## Setup

1. Clone the repository:

```bash
git clone https://github.com/HarrisSidiropoulos/frontend-assignment-rabobank.git
cd frontend-assignment-rabobank
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server (frontend, backend):

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200` to see the frontend application running.

# Assignment Rabobank

Rabobank’s software is mainly used to get insights on customer transactions. Within this assignment there is some backend software created to spin up a NodeJS service which serves a transactions file. Create an Angular application where a user can see their transactions in in list (timeline).

The requirements are:

- All transactions should be shown
- All transactions should be showed grouped based on date and ordered (newest on top)
- The information in the timeline should only show `otherParty.name` and the `amount` in EUR. (Be aware there is some USD as well, need to convert it based on the rate)
- When clicking on a transaction you should navigate to a detail page showing the more in-depth details
- It would be nice if there is some sort of styling (scss)

In addition to the code, consider other matters that you consider as part of your work.

## Thats it, happy 💻!
