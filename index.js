function superbowlWin(winRecord) {
  const result = "W"
  const matchingRecord = winRecord.find(yearRecord => {
    return yearRecord.result === result
  })
  if (matchingRecord === undefined) {
    return undefined 
    } else {
      return matchingRecord.year
  }
}
