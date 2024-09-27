const hre = require("hardhat");

async function main() {
    const TodoList = await hre.ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();

    await todoList.deployed();

    console.log("TodoList deployed to:", todoList.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
