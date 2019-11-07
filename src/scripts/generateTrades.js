import fs from 'fs'
import { rand, randInt } from '../utils/helpers'
import tokenPairs from '../jsons/tokenPairs.json'
import { utils } from 'ethers'

const orderHistory = []
const { pairs } = tokenPairs
const minTimeStamp = 1500000000000
const maxTimeStamp = 1520000000000
const minAmount = 0.1
const maxAmount = 10000
const minPrice = 100
const maxPrice = 100000

// console.log(format(new Date(maxTimeStamp), 'DD/MM/YYYY HH:MM:SS Z '))
// console.log(format(new Date(minTimeStamp), 'DD/MM/YYYY HH:MM:SS Z '))
const randomOrderSide = () => (randInt(0, 1) === 1 ? 'BUY' : 'SELL')
const randomOrderType = () => ['MARKET', 'LIMIT'][randInt(0, 1)]
const randomPair = () => pairs[randInt(0, 5)]
const randomAmount = () => rand(minAmount, maxAmount)
const randomTimestamp = () => randInt(minTimeStamp, maxTimeStamp)
const randomPrice = () => rand(minPrice, maxPrice)
const randomHash = () => utils.sha256(utils.randomBytes(100))
const randomAddress = () => randomHash().slice(0, 42)

for (let i = 0; i < 200; i++) {
  const order = {
    amount: randomAmount(),
    price: randomPrice(),
    type: randomOrderType(),
    side: randomOrderSide(),
    hash: randomHash(),
    orderHash: randomHash(),
    taker: randomAddress(),
    maker: randomAddress(),
    pairName: randomPair(),
    createdAt: randomTimestamp(),
  }

  orderHistory.push(order)
}

fs.writeFile('trades.json', JSON.stringify(orderHistory), 'utf8', err => {
  if (err) return console.log(err)
  console.log('File saved')
})
