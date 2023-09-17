import { SSX } from "@spruceid/ssx";
import { useState } from "react";
import '../globals.css';
import lit from "../../pages/api/lit";
import 'dotenv/config';
import Image from 'next/image';

const SSXComponent = () => {

    require('dotenv').config();
    const [ssxProvider, setSSX] = useState<SSX | null>(null);
    const [showMovie, setShowMovie] = useState<boolean>();
    const [youtubeURL, setYoutubeURL] = useState<string>();

    const ssxHandler = async () => {
        const ssx = new SSX({
            providers: {
                server: {
                    host: "http://nft-token-gated-access-to-private-movie-7ab58f.spheron.app/api"
                }
            },
            siweConfig: {
                statement: 'Login to access dApp-A-thon Season 2 special movie!',
                chainId: 80001
              },            
        }); 
        await ssx.signIn();
        setSSX(ssx);

        handleDecryptDownload();
    };
      
    const ssxLogoutHandler = async () => {
        ssxProvider?.signOut();
        setSSX(null);
    };

    const address = ssxProvider?.address() || '';

    const [isLoading, setIsLoading] = useState(false);
    // const [fileType, setFileType] = useState<string>("");  
    // setFileType("file");

    const handleDecryptDownload = async () => {
        try {
          setIsLoading(true);
          const decryptIPFS = "bafybeif44ibrljdps2mp4ul6gkv32ieraycrghcaqikiahlbhsdozx2qtu";
          
          const fileBlob = await lit.decryptFile(decryptIPFS);
          generateFileFromUint8Array(fileBlob);
          setShowMovie(true);
        } catch (err) {
          console.log(err);
          setShowMovie(false);
        } finally {
          setIsLoading(false);
        }
      };
    
      function generateFileFromUint8Array(
        uint8Array: string | Uint8Array
      ) {
        const blob = new Blob([uint8Array]);
    
        var myReader = new FileReader();
        myReader.addEventListener("loadend", function(e) {
            if (e.target !== null) {
                console.log(e.target.result); 
                if(typeof e.target.result === "string"){
                    setYoutubeURL(e.target.result);
                }
                
            }
        });        
        myReader.readAsText(blob);
      }

    return (
        <div className="App">
            <div className="App-header">
                <h1>&nbsp;dApp-A-thon Season 2</h1>
            </div>
            {
                ssxProvider ?
                    <div className="App-content">
                        <div>
                            {
                                showMovie==undefined ? (
                                    <div>
                                        <b>Checking for NFT...</b>
                                    </div>
                            ) : !showMovie ? (
                                    <div>
                                        <b className="spaceWrap">Hello fellow hacker! You don&apos;t have the movie NFT!</b>
                                        <div>Get the free NFT from Polygon Mumbai and login again.</div>
                                        <div className="spaceWrap">
                                        <div><a target="_blank" href="https://mumbai.polygonscan.com/address/0x4b36d1e269e4c1fb4d9c6f5939ba1a6fea732353#code">Mint Here</a></div>
                                        <div><a target="_blank" href="https://mumbai.polygonscan.com/address/0x4b36d1e269e4c1fb4d9c6f5939ba1a6fea732353#code"><Image src="/static/banner.jpeg" alt="mint" width="310" height="163" /></a></div>
                                        </div>
                                    </div>
                            ) : (
                                <div>
                                    <p>
                                    Hello fellow hacker! You are awesome!
                                    </p>
                                    <p>
                                        Here&apos;s an important video to watch!
                                    </p>
                                    <iframe
                                    width="560"
                                    height="315"
                                    src={youtubeURL}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    ></iframe>
                                </div>
                              )}
                        </div>
                        <button onClick={ssxLogoutHandler}>
                            Sign-Out
                        </button>
                    </div> :
                    <div className="App-content">
                        <h2>
                        NFT access to the Spheron hackathon movie!
                        </h2>
                        <button onClick={ssxHandler} className="spaceWrapMore">
                            Sign-In with Metamask
                        </button>
                    </div>
            }
        </div>
    );
};

export default SSXComponent;
