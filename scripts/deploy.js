// imports 
const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const { ethers, run, network } = require("hardhat");

// async main
async function main() { 
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`Deployed to : ${simpleStorage.address}`);

  if (network.config.chainId == 5 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }
  else  {
      console.log(
          "\nCan't Verify Automaticallly :\tLocal ChainId is not same as Deployed Network!"
      )
  }
conc
  // Generating new value
  const currentResponse = await simpleStorage.retrive();
  console.log(`Current Value : ${currentResponse}`);

  // Updating the value
  const transactionResopnse = await simpleStorage.store(69);
  await transactionResopnse.wait(1);
  const UpdatedResponse = await simpleStorage.retrive();
  console.log(`Updated Value : ${UpdatedResponse}`);


}

async function verify(contractAddress, args) {
  console.group("Verifying Contract...");
  try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args,
    });  
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log(`Already Verified`);
    }
    else {
      console.log(e);
    }
  }
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
