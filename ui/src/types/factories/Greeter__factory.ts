/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [],
    name: "addGreet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "person",
        type: "address",
      },
    ],
    name: "getGreetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "person",
        type: "address",
      },
    ],
    name: "getGreets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "sendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawGreet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a69806100206000396000f3fe60806040526004361061004a5760003560e01c80630d0de4ac1461004f578063274a577f1461006b57806348c981e2146100755780637bc86f6c1461009157806398c2cb6c146100ce575b600080fd5b610069600480360381019061006491906106a4565b61010b565b005b610073610227565b005b61008f600480360381019061008a919061072f565b61032d565b005b34801561009d57600080fd5b506100b860048036038101906100b3919061072f565b61033a565b6040516100c5919061076b565b60405180910390f35b3480156100da57600080fd5b506100f560048036038101906100f0919061072f565b610383565b604051610102919061076b565b60405180910390f35b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541061022457806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461019a91906107b5565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610222573d6000803e3d6000fd5b505b50565b610230336103cb565b61023934610464565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461028791906107e9565b9250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102dd91906107e9565b9250508190555061032b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610464565b565b61033781346104fd565b50565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610461816040516024016103df919061082c565b6040516020818303038152906040527f2c2ecbc2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610640565b50565b6104fa81604051602401610478919061076b565b6040516020818303038152906040527ff82c50f1000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610640565b50565b80471015610540576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610537906108ca565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff811115610575576105746108ea565b5b6040519080825280601f01601f1916602001820160405280156105a75781602001600182028036833780820191505090505b506040516105b5919061098a565b60006040518083038185875af1925050503d80600081146105f2576040519150601f19603f3d011682016040523d82523d6000602084013e6105f7565b606091505b505090508061063b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063290610a13565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b6000819050919050565b6106818161066e565b811461068c57600080fd5b50565b60008135905061069e81610678565b92915050565b6000602082840312156106ba576106b9610669565b5b60006106c88482850161068f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106fc826106d1565b9050919050565b61070c816106f1565b811461071757600080fd5b50565b60008135905061072981610703565b92915050565b60006020828403121561074557610744610669565b5b60006107538482850161071a565b91505092915050565b6107658161066e565b82525050565b6000602082019050610780600083018461075c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107c08261066e565b91506107cb8361066e565b92508282039050818111156107e3576107e2610786565b5b92915050565b60006107f48261066e565b91506107ff8361066e565b925082820190508082111561081757610816610786565b5b92915050565b610826816106f1565b82525050565b6000602082019050610841600083018461081d565b92915050565b600082825260208201905092915050565b7f53747265616d696e673a3a736166655472616e736665724554483a20496e737560008201527f6666696369656e7420616d6f756e740000000000000000000000000000000000602082015250565b60006108b4602f83610847565b91506108bf82610858565b604082019050919050565b600060208201905081810360008301526108e3816108a7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081519050919050565b600081905092915050565b60005b8381101561094d578082015181840152602081019050610932565b60008484015250505050565b600061096482610919565b61096e8185610924565b935061097e81856020860161092f565b80840191505092915050565b60006109968284610959565b915081905092915050565b7f53747265616d696e673a3a736166655472616e736665724554483a204554482060008201527f7472616e73666572206661696c65640000000000000000000000000000000000602082015250565b60006109fd602f83610847565b9150610a08826109a1565b604082019050919050565b60006020820190508181036000830152610a2c816109f0565b905091905056fea2646970667358221220c0b49012d57999315fecdce5d9be0a46ea31a97b13ea9de843a40f4c6c90a48364736f6c63430008110033";

type GreeterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GreeterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Greeter__factory extends ContractFactory {
  constructor(...args: GreeterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Greeter> {
    return super.deploy(overrides || {}) as Promise<Greeter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  override connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
