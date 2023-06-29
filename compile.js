solc = require("solc");

fs = require("fs");

Web3 = require("web3");

let web3 = new Web3("http://127.0.0.1:7545");

let fileContent = fs.readFileSync("methodscall.sol").toString();

let input = {
  language: "Solidity",
  sources: {
    "methodscall.sol": {
      content: fileContent,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
ABI = output.contracts["methodscall.sol"]["methodcall"].abi;
bytecode = output.contracts["methodscall.sol"]["methodscall"].evm.bytecode.object;
console.log("abi :", ABI);
console.log("bytecode :", bytecode);