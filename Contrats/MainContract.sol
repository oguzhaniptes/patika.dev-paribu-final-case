// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./Token.sol";

contract SupplyChain{
    
    SupplyChainCoin public supplychaincoin;
    address public owner;

    constructor(address _supplychaincoin){
        supplychaincoin = SupplyChainCoin(_supplychaincoin);
        owner = msg.sender;
    }

    struct Product {
        string name;
        bool kalite;
    }


    mapping (address => uint) balance;
    mapping (address => Product) productMap;

    string[] private accepted_products;

    // event order(uint256 indexed time, uint maliyet);
    // event ok(bool kalite, uint256 indexed time, address indexed tedarikci, address indexed fabrika, uint maliyet);
    // event back(bool kalite, uint256 indexed time, address indexed tedarikci, address indexed fabrika, uint maliyet);




    function toOrder() payable external{
        require(msg.value > 0, "cannot zero");
        balance[msg.sender] += msg.value;
    }


    function purcasing(address _to,string memory _name, uint _amount, bool _quality)payable external quality(_quality){
        require(balance[msg.sender] <= _amount, "not enough balance");
        balance[msg.sender] -= _amount;
        balance[_to] += _amount;

        accepted_products.push(_name);

    }

    function reject(uint _amount, bool _quality)payable external{
        require(_quality == false, "product is not good quality");
        require(balance[msg.sender] >= _amount, "not enough balance");
        balance[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);


    }

    function listBalance(address _to) external view returns(uint,uint){
        return (address(_to).balance , address(msg.sender).balance);
    }

    function listProduct()external view returns(string[] memory){
        return accepted_products;
    }

    modifier quality(bool _quality){
        require(_quality, "product is not good quality");
        _;
    }
}
