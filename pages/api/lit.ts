import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { decryptUpload } from "@spheron/browser-upload";

const client = new LitJsSdk.LitNodeClient({});
const chain = "mumbai";

const accessControlConditions = [
  {
    contractAddress: '0x4B36D1E269E4C1Fb4D9C6f5939bA1a6fEA732353',
    standardContractType: 'ERC721',
    chain,
    method: 'balanceOf',
    parameters: [
      ':userAddress'
    ],
    returnValueTest: {
      comparator: '>',
      value: '0'
    }
  }
];

class Lit {
  litNodeClient: any;

  async connect() {
    await client.connect();
    this.litNodeClient = client;
  }

  async decryptFile(ipfsCid: string) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    const decryptedFile = await decryptUpload({
      authSig,
      ipfsCid,
      litNodeClient: this.litNodeClient,
    });

    return decryptedFile;
  }
}
const lit = new Lit();

export default lit;