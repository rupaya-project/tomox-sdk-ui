// @flow
import type { AccountState, ReferenceCurrency } from '../../types/account'

const initialState = {
  address: null,
  privateKey: null,
  currentBlock: '',
  showHelpModal: true,
  exchangeAddress: '',
  referenceCurrency: { name: 'USD', symbol: '$' },
  time: new Date().getTime().toString(),
}

export const initialized = () => {
  const event = (state: AccountState = initialState) => state
  return event
}

export const accountUpdated = (address: string, privateKey: string) => {
  const event = (state: AccountState) => ({
    ...state,
    address: address.toLowerCase(),
    privateKey,
  })
  return event
}

export const accountRemoved = () => {
  const event = (state: AccountState) => ({
    ...state,
    address: null,
    privateKey: null,
  })

  return event
}

export const currentBlockUpdated = (currentBlock: string) => {
  const event = (state: AccountState) => ({
    ...state,
    currentBlock,
  })
  return event
}

export const showHelpModalUpdated = (showHelpModal: boolean) => {
  const event = (state: AccountState) => ({
    ...state,
    showHelpModal,
  })

  return event
}

export const exchangeAddressUpdated = (exchangeAddress: string) => {
  const event = (state: AccountState) => ({
    ...state,
    exchangeAddress,
  })

  return event
}

// Todo: need improve /info api to get correct fee
export const exchangeFeeUpdated = (fee: string) => {
  const exchangeFee = +fee

  const event = (state: AccountState) => ({
    ...state,
    exchangeFee,
  })

  return event
}

export const referenceCurrencyUpdated = (referenceCurrency: ReferenceCurrency) => {

  console.log(referenceCurrency)

  const event = (state: AccountState) => ({
    ...state,
    referenceCurrency: {
      name: referenceCurrency.name,
      symbol: referenceCurrency.symbol,
    },
  })

  return event
}

export default function accountDomain(state: AccountState) {
  return {
    address: () => state.address,
    privateKey: () => state.privateKey,
    currentBlock: () => state.currentBlock,
    authenticated: () => state.address !== null,
    showSessionPasswordModal: () => state.showSessionPasswordModal,
    exchangeAddress: () => state.exchangeAddress,
    referenceCurrency: () => state.referenceCurrency,
    fee: () => state.exchangeFee,
    time: () => state.time,
  }
}
