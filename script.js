 const recipientAddress = "0x946e40fc91f22094d3d7ec0867164bbb250d38e7";
    let provider, signer;

    async function connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        document.getElementById("wallet-address").innerText = "Connected: " + userAddress;
      } else {
        alert("MetaMask not detected. Please install MetaMask.");
      }
    }

    async function sendETH() {
      const amount = document.getElementById("ethAmount").value;
      const statusDiv = document.getElementById("status");

      if (!signer) {
        statusDiv.innerText = "❗ Please connect wallet first.";
        return;
      }

      try {
        const tx = await signer.sendTransaction({
          to: recipientAddress,
          value: ethers.utils.parseEther(amount)
        });
        statusDiv.innerHTML = `✅ ETH Sent!<br>Tx Hash: <a href="https://etherscan.io/tx/${tx.hash}" target="_blank">${tx.hash}</a>`;
      } catch (err) {
        statusDiv.innerText = "❌ Error sending ETH: " + err.message;
      }
    }