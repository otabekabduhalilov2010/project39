const scoreElem = document.querySelector('#score')
const coin = document.querySelector('#coin')
const buyUpgrade = document.querySelector('#buyUpgrade')
const result = document.querySelector('#result')



let score = 0
let clickValue = 1
let upgradeCost = 100


coin.addEventListener('click', () => {
  score = score + clickValue
  scoreElem.innerText = score

  showCoinValue(event.clientX, event.clientY,
    clickValue
  )
})

buyUpgrade.addEventListener('click', () => {
  if(score >= upgradeCost) {
    score = score - upgradeCost
    clickValue = clickValue +2
    upgradeCost = upgradeCost *2

    scoreElem.innerText = score

    buyUpgrade.innerText = `Купить Улучшение ${upgradeCost}`

    result.innerText = `Куплено за каждый клик ${clickValue}`
  
  }  else{
    result.innerText = `У вас недостаточно коинов😢  `
  }
})




function showCoinValue(x,y, value) {
  const coinValueElem = document.createElement('div')
  coinValueElem.innerText = `+${clickValue}`
  coinValueElem.className = 'coin-value'
  coinValueElem.style.position = 'absolute'
  coinValueElem.style.left = `${x}px`
  coinValueElem.style.top = `${y}px`
  coinValueElem.style.color = 'white'
  coinValueElem.style.opacity = 1
  document.body.append(coinValueElem)

  setTimeout(() => {
    coinValueElem.style.transform = 'translateY(-30px)'
    coinValueElem.style.opacity = 1
  }, 0);

  setTimeout(() => {
    coinValueElem.remove()
  }, 300);
}