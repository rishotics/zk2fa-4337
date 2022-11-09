import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OTPFactoryInterface extends utils.Interface {
    functions: {
        "createOTP(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createOTP"): FunctionFragment;
    encodeFunctionData(functionFragment: "createOTP", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "createOTP", data: BytesLike): Result;
    events: {
        "ContractCreated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;
}
export interface ContractCreatedEventObject {
    newAddress: string;
}
export declare type ContractCreatedEvent = TypedEvent<[
    string
], ContractCreatedEventObject>;
export declare type ContractCreatedEventFilter = TypedEventFilter<ContractCreatedEvent>;
export interface OTPFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OTPFactoryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        createOTP(_verifier: PromiseOrValue<string>, merkleRoot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createOTP(_verifier: PromiseOrValue<string>, merkleRoot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createOTP(_verifier: PromiseOrValue<string>, merkleRoot: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractCreated(address)"(newAddress?: null): ContractCreatedEventFilter;
        ContractCreated(newAddress?: null): ContractCreatedEventFilter;
    };
    estimateGas: {
        createOTP(_verifier: PromiseOrValue<string>, merkleRoot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createOTP(_verifier: PromiseOrValue<string>, merkleRoot: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
