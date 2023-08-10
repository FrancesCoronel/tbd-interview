# The Los Alamos Research App

The Los Alamos Research App, aka LARA, allows scientists collaborate and manage sensitive research related to the creation of the first atomic bomb.

I was inspired after watching the movie Oppenheimer which was 3 hours of character development and 5 minutes of the actual bomb being dropped.

I thought, "What if there was an app that could help the scientists collaborate and manage their research in a decentralized manner since identity verification was so important for them?".

And thus, LARA was born.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Overview

The Los Alamos Research App leverages decentralized technologies to provide a secure and collaborative environment for scientists.

By using DIDs, decentralized storage, encrypted communication, and specialized collaboration protocols, LARA ensures that sensitive research data is handled with the utmost confidentiality and integrity.

It's a comprehensive solution that addresses the unique challenges of managing highly sensitive and collaborative research projects.

![System Design](https://i.imgur.com/D8L5z7d.png)

### User Interface (UI)

- Access Point: Scientists access a user interface that provides tools for collaboration, data management, and secure communication.
- Authentication: Users are authenticated through Decentralized Identifiers (DIDs), ensuring a secure and privacy-preserving login process.

### DID Management

- DID Creation: New users create a DID, which serves as a decentralized identity within the system.
- DID Verification: Existing users' DIDs are verified to ensure that only authorized individuals can access the system. (TO NOTE: The auth logic is just mocked up right now)

### Decentralized Web Node (DWN)

- Data Storage: All data, including research documents and collaboration details, are stored in decentralized web nodes (DWNs).

## Screenshots

### Login

![Login](https://i.imgur.com/ONMiA34.png)

### Initial state after login

![Initial State](https://i.imgur.com/3SqQAaI.png)

### Managing documents

![Documents](https://i.imgur.com/kFGxrL1.png)

## Project approach

I spent about 5 hours on this project.

I spent the first hour brainstorming and deciding on an idea and creating a basic scaffold.

I plan to spend the next 2 hours building the UI and decentralized architecture

Then I spent one more hour cleaning up the code and preparing the README to present.

### To Note

A caveat I will mention is that I not spend a lot of time implementing the DID authentication logic. I mocked it out with a simple boolean check.

I also didn't spend any time writing tests using Cypress or Jest. I did note that Web5 doesn't seem to support types for TypeScript yet so this is part of the reason I didn't write tests.

I am unable to deploy the app to a live URL (https://lara-tbd.vercel.app) because it seems Web5 doesn't support the latest version of Next.js. I was able to get it to run locally though.

Here's the error for reference:

```txt
Error: No native build was found for platform=darwin arch=arm64 runtime=node abi=115 uv=1 armv=8 libc=glibc node=20.5.1 webpack=true
```

## Resources

- [TBD Quickstart](https://developer.tbd.website/docs/web5/quickstart)
- [TBD ChatGPT Plugin](https://developer.tbd.website/blog/web5-chatgpt/)
