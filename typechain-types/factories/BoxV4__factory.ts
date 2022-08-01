/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { BoxV4, BoxV4Interface } from "../BoxV4";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "NameChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107dc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806317d7de7c1461005c5780632e64cec11461007a5780636057361d14610098578063c47f0027146100b4578063d09de08a146100d0575b600080fd5b6100646100da565b60405161007191906104d2565b60405180910390f35b610082610102565b60405161008f9190610516565b60405180910390f35b6100b260048036038101906100ad919061031d565b61010b565b005b6100ce60048036038101906100c991906102dc565b61014c565b005b6100d861019e565b005b606060016040516020016100ee91906104b0565b604051602081830303815290604052905090565b60008054905090565b806000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516101419190610516565b60405180910390a150565b80600190805190602001906101629291906101bc565b507f4737457377f528cc8afd815f73ecb8b05df80d047dbffc41c17750a4033592bc600160405161019391906104f4565b60405180910390a150565b6101ba60016101ab610102565b6101b591906105c3565b61010b565b565b8280546101c890610665565b90600052602060002090601f0160209004810192826101ea5760008555610231565b82601f1061020357805160ff1916838001178555610231565b82800160010185558215610231579182015b82811115610230578251825591602001919060010190610215565b5b50905061023e9190610242565b5090565b5b8082111561025b576000816000905550600101610243565b5090565b600061027261026d84610556565b610531565b90508281526020810184848401111561028a57600080fd5b610295848285610623565b509392505050565b600082601f8301126102ae57600080fd5b81356102be84826020860161025f565b91505092915050565b6000813590506102d68161078f565b92915050565b6000602082840312156102ee57600080fd5b600082013567ffffffffffffffff81111561030857600080fd5b6103148482850161029d565b91505092915050565b60006020828403121561032f57600080fd5b600061033d848285016102c7565b91505092915050565b60006103518261059c565b61035b81856105a7565b935061036b818560208601610632565b61037481610755565b840191505092915050565b6000815461038c81610665565b61039681866105a7565b945060018216600081146103b157600181146103c3576103f6565b60ff19831686526020860193506103f6565b6103cc85610587565b60005b838110156103ee578154818901526001820191506020810190506103cf565b808801955050505b50505092915050565b6000815461040c81610665565b61041681866105b8565b94506001821660008114610431576001811461044257610475565b60ff19831686528186019350610475565b61044b85610587565b60005b8381101561046d5781548189015260018201915060208101905061044e565b838801955050505b50505092915050565b600061048b6006836105b8565b915061049682610766565b600682019050919050565b6104aa81610619565b82525050565b60006104bb8261047e565b91506104c782846103ff565b915081905092915050565b600060208201905081810360008301526104ec8184610346565b905092915050565b6000602082019050818103600083015261050e818461037f565b905092915050565b600060208201905061052b60008301846104a1565b92915050565b600061053b61054c565b90506105478282610697565b919050565b6000604051905090565b600067ffffffffffffffff82111561057157610570610726565b5b61057a82610755565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006105ce82610619565b91506105d983610619565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561060e5761060d6106c8565b5b828201905092915050565b6000819050919050565b82818337600083830152505050565b60005b83811015610650578082015181840152602081019050610635565b8381111561065f576000848401525b50505050565b6000600282049050600182168061067d57607f821691505b60208210811415610691576106906106f7565b5b50919050565b6106a082610755565b810181811067ffffffffffffffff821117156106bf576106be610726565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e616d653a200000000000000000000000000000000000000000000000000000600082015250565b61079881610619565b81146107a357600080fd5b5056fea2646970667358221220b95af52d52e9f646837c8fa65c43d5fee7234b011c2b0631640fa98b14cec7f664736f6c63430008040033";

type BoxV4ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxV4ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxV4__factory extends ContractFactory {
  constructor(...args: BoxV4ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoxV4> {
    return super.deploy(overrides || {}) as Promise<BoxV4>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoxV4 {
    return super.attach(address) as BoxV4;
  }
  override connect(signer: Signer): BoxV4__factory {
    return super.connect(signer) as BoxV4__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxV4Interface {
    return new utils.Interface(_abi) as BoxV4Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BoxV4 {
    return new Contract(address, _abi, signerOrProvider) as BoxV4;
  }
}
