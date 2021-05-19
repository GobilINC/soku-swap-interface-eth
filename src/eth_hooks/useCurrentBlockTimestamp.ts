import { BigNumber } from 'ethers'
import { useSingleCallResult } from '../eth_state/multicall/hooks'
import { useMulticallContract } from './useContract'

// gets the current timestamp from the blockchain
export default function useCurrentBlockTimestamp(): BigNumber | undefined {
    const multicall = useMulticallContract()
    return useSingleCallResult(multicall, 'getCurrentBlockTimestamp')?.result?.[0]
}
