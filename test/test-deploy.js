const { expect,assert } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let SimpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
  });


  it("Number should start with 0.", async function () {
      const currentValue = await simpleStorage.retrive()
      const expectedValue = "0"

      // assert and expect
    assert.equal(currentValue.toString(), expectedValue);   // expect().to.equal();
  });
  it("Should update only when call store.", async function () {
    const expectedValue = "69";
    const transactionResponse = await simpleStorage.store(69);
    await transactionResponse.wait(1);
    const UpdatedResponse = await simpleStorage.retrive();

    assert.equal(UpdatedResponse.toString(), expectedValue);
  });
  
});