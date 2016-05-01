// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"value","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"kickback","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"platform","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"AddPremium","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"FindBug","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"guest","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"HotShower","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"deposit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Reserve","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"premium","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"leaveRoom","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"host","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561037f8061002f6000396000f3606060405236156100b95760e060020a60003504633fa4f24581146100bb57806349eb2e66146100c45780634bde38c8146100cd5780636cf84fe1146100df5780637502bd931461011f5780637bd703e81461014757806390b98a11146101725780639a04f704146101a2578063cf958018146101b4578063d0e30db0146101df578063db7b64a8146101e8578063e0a73a9314610228578063eb9696da14610231578063f437bc5914610249578063f8b2cb4f1461025b575b005b61028160015481565b61028160075481565b610293600554600160a060020a031681565b6100b96004356004805473ffffffffffffffffffffffffffffffffffffffff191633179055600281905560055461032d90600160a060020a03168261017c565b6100b9600280546001546007805491909201929092049182019055600680549190910390555b565b610281600435600073376a444216fa5968457f8a19099e6f7a60bd01916396e4ee3d6102e884610262565b6102816004356024355b33600160a060020a0316600090815260208190526040812054829010156102b0576102e2565b610293600454600160a060020a031681565b6100b960025460015460078054600a9290930160030291909104918201905560068054919091039055565b61028160065481565b6100b96004356004805473ffffffffffffffffffffffffffffffffffffffff191633179055600181905560055461032d90600160a060020a03168261017c565b61028160025481565b6100b960055461033190600160a060020a0316610262565b610293600354600160a060020a031681565b6102816004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f41561000257505060405151915061027c9050565b5050565b60065460075401141561035a5760065460035461035f91600160a060020a03919091169061017c565b610002565b5060045460075461037991600160a060020a03169061017c565b5061014556",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561037f8061002f6000396000f3606060405236156100b95760e060020a60003504633fa4f24581146100bb57806349eb2e66146100c45780634bde38c8146100cd5780636cf84fe1146100df5780637502bd931461011f5780637bd703e81461014757806390b98a11146101725780639a04f704146101a2578063cf958018146101b4578063d0e30db0146101df578063db7b64a8146101e8578063e0a73a9314610228578063eb9696da14610231578063f437bc5914610249578063f8b2cb4f1461025b575b005b61028160015481565b61028160075481565b610293600554600160a060020a031681565b6100b96004356004805473ffffffffffffffffffffffffffffffffffffffff191633179055600281905560055461032d90600160a060020a03168261017c565b6100b9600280546001546007805491909201929092049182019055600680549190910390555b565b610281600435600073__ConvertLib____________________________6396e4ee3d6102e884610262565b6102816004356024355b33600160a060020a0316600090815260208190526040812054829010156102b0576102e2565b610293600454600160a060020a031681565b6100b960025460015460078054600a9290930160030291909104918201905560068054919091039055565b61028160065481565b6100b96004356004805473ffffffffffffffffffffffffffffffffffffffff191633179055600181905560055461032d90600160a060020a03168261017c565b61028160025481565b6100b960055461033190600160a060020a0316610262565b610293600354600160a060020a031681565b6102816004355b600160a060020a0381166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f41561000257505060405151915061027c9050565b5050565b60065460075401141561035a5760065460035461035f91600160a060020a03919091169061017c565b610002565b5060045460075461037991600160a060020a03169061017c565b5061014556",
    address: "0x446ea9662b32c42d16a58acd120ae8fc322e3389",
    generated_with: "2.0.6",
    contract_name: "SmartAirbnb"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("SmartAirbnb error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("SmartAirbnb error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("SmartAirbnb error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("SmartAirbnb error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.SmartAirbnb = Contract;
  }

})();
