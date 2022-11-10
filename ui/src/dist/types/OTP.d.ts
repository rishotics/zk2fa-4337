import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface OTPInterface extends utils.Interface {
    functions: {
        "blockApproval(uint256[2],uint256[2][2],uint256[2],uint256[2])": FunctionFragment;
        "dummy()": FunctionFragment;
        "lastUsedTime()": FunctionFragment;
        "naiveApproval(uint256[2],uint256[2][2],uint256[2],uint256[2],address)": FunctionFragment;
        "root()": FunctionFragment;
        "verifierAddr()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "blockApproval" | "dummy" | "lastUsedTime" | "naiveApproval" | "root" | "verifierAddr"): FunctionFragment;
    encodeFunctionData(functionFragment: "blockApproval", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "dummy", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUsedTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "naiveApproval", values: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "root", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifierAddr", values?: undefined): string;
    decodeFunctionResult(functionFragment: "blockApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dummy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUsedTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "naiveApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifierAddr", data: BytesLike): Result;
    events: {};
}
export interface OTP extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OTPInterface;
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
        blockApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dummy(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUsedTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        naiveApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        root(overrides?: CallOverrides): Promise<[BigNumber]>;
        verifierAddr(overrides?: CallOverrides): Promise<[string]>;
    };
    blockApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dummy(overrides?: CallOverrides): Promise<BigNumber>;
    lastUsedTime(overrides?: CallOverrides): Promise<BigNumber>;
    naiveApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ],
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _to: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    root(overrides?: CallOverrides): Promise<BigNumber>;
    verifierAddr(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        blockApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: CallOverrides): Promise<void>;
        dummy(overrides?: CallOverrides): Promise<BigNumber>;
        lastUsedTime(overrides?: CallOverrides): Promise<BigNumber>;
        naiveApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        verifierAddr(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        blockApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dummy(overrides?: CallOverrides): Promise<BigNumber>;
        lastUsedTime(overrides?: CallOverrides): Promise<BigNumber>;
        naiveApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        verifierAddr(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        blockApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dummy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUsedTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        naiveApproval(a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], b: [
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ],
            [
                PromiseOrValue<BigNumberish>,
                PromiseOrValue<BigNumberish>
            ]
        ], c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], input: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>], _to: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifierAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
