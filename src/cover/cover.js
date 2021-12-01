
const MONTH_NAME = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

CurrentTime()

function CurrentTime () {
  const yesterday = new Date()
  const today = new Date()
  const tomorrow = new Date()

  yesterday.setDate(yesterday.getDate() - 1)
  tomorrow.setDate(tomorrow.getDate() + 1)

  let yesterdayDay = yesterday.getDate()
  let todayDay = today.getDate()
  let tomorrowDay = tomorrow.getDate()

  const todayMonth = today.getMonth()
  const todayYear = today.getFullYear()

  if (yesterdayDay < 10) yesterdayDay = `0${yesterdayDay}`
  if (todayDay < 10) todayDay = `0${todayDay}`
  if (tomorrowDay < 10) tomorrowDay = `0${tomorrowDay}`

  document.getElementById('date__yesterday').innerHTML = yesterdayDay
  document.getElementById('date__today').innerHTML = todayDay
  document.getElementById('date__tomorrow').innerHTML = tomorrowDay

  const todayStringDate = `${MONTH_NAME[todayMonth]} ${todayDay} ${todayYear}`
  console.log(todayStringDate)
}
