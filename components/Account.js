import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { useEffect, useRef, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import { formatEtherscanLink, shortenHex } from "../util";

const Account = ({ triedToEagerConnect }) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError
  } = useWeb3React();

  // initialize metamask onboarding
  const onboarding = useRef();

  useEffect(() => {
    onboarding.current = new MetaMaskOnboarding();
  }, []);

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      onboarding.current?.stopOnboarding();
    }
  }, [active, error]);

  const [ischain, setIsChain] = useState(false);
  useEffect(() => {
    if (chainId === 137) {
      setIsChain(true);
    } else {
      setIsChain(false);
    }
  });

  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  const addNetwork = () => {
    const params = [
      {
        chainId: "0x89",
        chainName: "Polygon Mainnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18
        },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com"]
      }
    ];
    window.ethereum
      .request({ method: "wallet_addEthereumChain", params })
      .then(() => console.log("Success"))
      .catch((error) => console.log("Error", error.message));
  };

  if (typeof account !== "string") {
    const hasMetaMaskOrWeb3Available =
      MetaMaskOnboarding.isMetaMaskInstalled() ||
      window?.ethereum ||
      window?.web3;

    return (
      <div>
        {hasMetaMaskOrWeb3Available ? (
          <button
            className="bg-white px-7 py-1 -mt-0.5 border rounded-lg font-mono text-sm leading-snug"
            onClick={() => {
              setConnecting(true);

              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {MetaMaskOnboarding.isMetaMaskInstalled() ? "connect" : "connect"}
          </button>
        ) : (
          <button
            onClick={() => onboarding.current?.startOnboarding()}
            className="font-mono text-sm"
          >
            install metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <a
        className="text-gray-700 font-mono"
        {...{
          target: "_blank",
          rel: "noopener noreferrer"
        }}
      >
        {ENSName || `${shortenHex(account, 4)}`}
      </a>
      <div className="fixed w-full">
        {ischain === true ? (
          <span className=""></span>
        ) : (
          <div>
            <span className="font-mono absolute inset-0  flex items-center justify-center">
              <div class="border w-full h-full fixed top-0 left-0  z-40">
                <div class=" w-full h-screen items-center flex  bg-opacity-90 bg-white">
                  <div class="flex flex-col items-center justify-center ">
                    <div className="mb-8 w-11/12 lg:w-2/5 text-gray-400 text-2xl flex mx-auto text-center tracking-tight">
                      You Are Connected to a Non-Polygon Network. Please Change
                      Your Network or Disconnect Your Wallet.
                    </div>
                    <button
                      className="animate-bounce w-80 py-2 bg-gray-400 text-white border rounded-lg"
                      onClick={() => addNetwork()}
                    >
                      Switch to Polygon Network
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
