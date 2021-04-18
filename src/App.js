import "./App.css";
import Web3 from "web3";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const provider = Web3.givenProvider || "http://localhost:8545";
const web3 = new Web3(provider);

const App = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const loadBlockChainData = async () => {
    const network = await web3.eth.net.getNetworkType();
    console.log(`Network: ${network}`);
  };

  const requestAccount = async () => {
    const accounts = await web3.eth.requestAccounts();
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }
  };

  return (
    <div className="container">
      <h1>Ethereum Account Connector</h1>
      {account !== "" && <p>Your account: {account}</p>}
      <Button onClick={requestAccount} variant="primary">
        Request account
      </Button>
    </div>
  );
};

export default App;
