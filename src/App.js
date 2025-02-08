
import React, { useState } from "react";
import web3 from "./services/web3";

function App() {
    const [account, setAccount] = useState("");

    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <div>
            <h1>Textile Recycling Blockchain</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Connected: {account}</p>}
        </div>
    );
}

export default App;
