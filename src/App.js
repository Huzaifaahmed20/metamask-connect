import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div className="App">
        {isWalletInstalled ? (
          <div className="connect-btn" onClick={connectWallet}>
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
              }
              height="50"
              alt="metamask-logo"
            />

            <span>Connect Metamask Wallet</span>
          </div>
        ) : (
          <p>Install Metamask wallet</p>
        )}
      </div>
    );
  }
  return (
    <div className="App">
      <p>Connected as:</p>
      <p className="account-number">{account}</p>
    </div>
  );
}

export default App;
