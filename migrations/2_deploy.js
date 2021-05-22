const MintStbl = artifacts.require("MintStbl");

module.exports = function (deployer) {
  deployer.deploy(MintStbl);
};