const info = document.querySelector('.info');
const infoTab = document.querySelector('.info-tab')
const closeinfo = document.getElementById('close-info')

info.addEventListener('click', e=> {

  infoTab.style.display = 'block';
  // container.style.height = '100vh';
  // container.style.overflowY = 'hidden';

  setTimeout(() => {
      infoTab.classList.add('active');
      infoTab.classList.remove('closed');
  }, 1)

  // setTimeout(() => {
  //     blur.style.display = 'block';
  // }, 500)

  instructionIcon.classList.add('opened');
})

closeinfo.addEventListener('click', e=> {
    
  infoTab.classList.remove('active');
  infoTab.classList.add('closed');

    // blur.style.display = 'none';
  instructionIcon.classList.remove('opened');
    // container.style.overflowY = 'auto';

})








// let totalRaised = 312; // Placeholder
//     document.getElementById("progressBar").value = totalRaised;
//     document.getElementById("progressLabel").innerText = `${totalRaised} SOL Raised`;

//     async function buyToken() {
//       const amount = parseFloat(document.getElementById("amount").value);
//       if (!amount || amount <= 0) {
//         alert("Please enter a valid amount.");
//         return;
//       }

//       if (!window.solana || !window.solana.isPhantom) {
//         alert("Phantom Wallet not detected. Please install it first.");
//         return;
//       }

//       try {
//         const provider = window.solana;
//         await provider.connect();

//         const recipient = "E4qdbjzM45hfXfqncuqwmxqU1GGJ3qs7TNuci7iSNgA5";
//         const lamports = amount * 1e9;

//         const connection = new solanaWeb3.Connection('https://api.mainnet-beta.solana.com');
//         const transaction = new solanaWeb3.Transaction().add(
//           solanaWeb3.SystemProgram.transfer({
//             fromPubkey: provider.publicKey,
//             toPubkey: new solanaWeb3.PublicKey(recipient),
//             lamports: lamports,
//           })
//         );

//         transaction.feePayer = provider.publicKey;
//         let blockhashObj = await connection.getLatestBlockhash();
//         transaction.recentBlockhash = blockhashObj.blockhash;

//         const signed = await provider.signTransaction(transaction);
//         const signature = await connection.sendRawTransaction(signed.serialize());
//         await connection.confirmTransaction(signature);

//         alert("Transaction successful! TX Hash: " + signature);
//       } catch (error) {
//         console.error("Transaction failed:", error);
//         alert("Transaction failed. Check console for details.");
//       }
//     }





































//  const recipientAddress = "0x946e40fc91f22094d3d7ec0867164bbb250d38e7";
//     let provider, signer;

//     async function connectWallet() {
//       if (typeof window.ethereum !== 'undefined') {
//         provider = new ethers.providers.Web3Provider(window.ethereum);
//         await provider.send("eth_requestAccounts", []);
//         signer = provider.getSigner();
//         const userAddress = await signer.getAddress();
//         document.getElementById("wallet-address").innerText = "Connected: " + userAddress;
//       } else {
//         alert("MetaMask not detected. Please install MetaMask.");
//       }
//     }

//     async function sendETH() {
//       const amount = document.getElementById("ethAmount").value;
//       const statusDiv = document.getElementById("status");

//       if (!signer) {
//         statusDiv.innerText = "❗ Please connect wallet first.";
//         return;
//       }

//       try {
//         const tx = await signer.sendTransaction({
//           to: recipientAddress,
//           value: ethers.utils.parseEther(amount)
//         });
//         statusDiv.innerHTML = `✅ ETH Sent!<br>Tx Hash: <a href="https://etherscan.io/tx/${tx.hash}" target="_blank">${tx.hash}</a>`;
//       } catch (err) {
//         statusDiv.innerText = "❌ Error sending ETH: " + err.message;
//       }
//     }