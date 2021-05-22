const MintStbl = artifacts.require("MintStbl");
const { legos } = require("@studydefi/money-legos");
const { ethers, Wallet, Contract } = require("ethers");

//Instructions in README
const privateKey = '0x0' //paste Private Key of 1st ganache-cli account
const provider = new ethers.providers.JsonRpcProvider(); //connect to ganache on port 8545
const wallet = new ethers.Wallet(privateKey, provider)

module.exports = async function(callback) {
  try{
    const contract = await MintStbl.deployed()
    const stbl = new ethers.Contract(legos.erc20.stbl.address, legos.erc20.stbl.abi, wallet);
    
    console.log('Balance ETH b4:', ethers.utils.formatEther(await wallet.getBalance()))
    console.log('Balance stbl b4:', ethers.utils.formatEther(await stbl.balanceOf(wallet.address)))

    console.log('\nMinting Stbl...')
    await contract.myCustomOpenVaultFunction(
      legos.maker.dssCdpManager.address,
      legos.maker.jug.address,
      legos.maker.ethAJoin.address,
      legos.maker.stblJoin.address,
      ethers.utils.parseUnits("5100", legos.erc20.stbl.decimals), //5.1k stbl; Amount have to be high enough, cuz fees!
      { gasLimit: 4000000, value: ethers.utils.parseEther("3") },
    )

    console.log('\nBalance ETH after:', ethers.utils.formatEther(await wallet.getBalance()))
    console.log('Balance stbl after:', ethers.utils.formatEther(await stbl.balanceOf(wallet.address)))
  } catch (e) {
    console.log(e)
  } callback()
}