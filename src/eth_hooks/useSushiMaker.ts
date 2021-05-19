import { useMakerContract } from 'eth_hooks'
import { useCallback } from 'react'
import { useTransactionAdder } from '../eth_state/transactions/hooks'

const useMaker = () => {
    const addTransaction = useTransactionAdder()
    const makerContract = useMakerContract()

    // Serve
    const serve = useCallback(
        async (token0: string, token1: string) => {
            try {
                const tx = await makerContract?.methods.convert(token0, token1)
                return addTransaction(tx, { summary: 'Serve' })
            } catch (e) {
                return e
            }
        },
        [addTransaction, makerContract]
    )

    // TODO: Serve all?

    return { serve }
}

export default useMaker
