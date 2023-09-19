# dApp-A-thon Season 2

Submission for dApp-A-thon Season 2.

Project: NFT Token Gated Access to Private Movie

This app requires user to login with Metamask (SIWE) and then checks if wallet owns the required NFT. 
If yes, it will use Spheron SDK to download decrypt IPFS CID. (file was upload and encrypted with Spheron SDK)
The IPFS file stores the url of the Youtube video to play.

1) Mint the free NFT here https://mumbai.polygonscan.com/address/0x4b36d1e269e4c1fb4d9c6f5939ba1a6fea732353#writeContract

2) Deploy the app locally, then login with Metamask to watch movie.

Encrypted IPFS CID was created though the upload feature of this sample repo https://github.com/spheronFdn/sdk/tree/main/examples/browser-upload

Verified Smart Contract on Polygon Mumbai https://mumbai.polygonscan.com/address/0x9524a647e688d9D71976B404582c2958A974242A

How the project uses Spheron
- Encrypts file to IPFS using Spheron SDK
- Decrypts file from IPFS using Spheron SDK

## Getting Started with Next

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
