import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVerifier, IVerifierInterface } from "../IVerifier";
export declare class IVerifier__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IVerifierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVerifier;
}
