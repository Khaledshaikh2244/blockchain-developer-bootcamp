// const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;

// module.exports = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });


// async function main() {
//   //fetch contract to deploy 
//   const Token = await ethers.getContractFactory("Token");
  
//     //Deploy contract
//   const token =  await Token.deploy()
//   // fetching copy 
//   await oken.deployed();
//   console.log(`Token Deployed to : ${token.address}`);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


// scripts/1_deploy.js
// const { ethers } = require("hardhat");

// async function main() {
//   // Get the contract factory
//   const Token = await ethers.getContractFactory("Token");

//   // Deploy the contract
//   const token = await Token.deploy();

//   // Wait for the contract to be deployed
//   await token.deployed();

//   console.log(`Token deployed to:" : ${token.address}`);
// }

// // Execute the main function
// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });


// ignition/modules/Lock.js
// const { ethers } = require("hardhat");
// const { ethers } = require("hardhat");

// async function main() {
//   // Get the contract factory
//   const Token = await ethers.getContractFactory("Token");
//   console.log("Token contract factory:", Token);

//   // Deploy the contract
//   const token = await Token.deploy();
//   console.log("Token deployment transaction:", token);

//   // Wait for the contract to be deployed
//   const deployedToken = await token.deployed();
//   console.log("Token deployed to:", deployedToken.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });
// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

//   const Token = await ethers.getContractFactory("Token");
//   const token = await Token.deploy();
//   await token.deployed();
//   console.log("Token object:", token);

//   console.log("Token deployed to:", token.address);

// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// async function main() {
//   const [deployer] = await ethers.getSigners();
//   console.log("Deploying contracts with the account:", deployer.address);

//   const Token = await ethers.getContractFactory("Token");
//   const token = await Token.deploy();

//   console.log("Token object:", token);
  
//   // Ensure token is what you expect
//   if (typeof token.deployed === 'function') {
//     await token.deployed();
//     console.log("Token deployed to:", token.address);
//   } else {
//     console.error("Error: token.deployed is not a function");
//   }
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory('Token');
  console.log("Token factory created:", Token);

  const token = await Token.deploy();
  console.log("Token deployment transaction:", token.deployTransaction);

  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
