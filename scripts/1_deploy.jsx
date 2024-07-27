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
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const Token = await ethers.getContractFactory("Token");

  // Deploy the contract
  const token = await Token.deploy();
  // Wait for the contract to be deployed
  await token.deployed();

  console.log(`Token deployed to: ${ token.address}`);
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
