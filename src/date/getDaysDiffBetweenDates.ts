/**
 * 日期相差天数
 * @param dateInitial
 * @param dateFinal
 */
function getDaysDiffBetweenDates(dateInitial: Date, dateFinal: Date) {
  return (dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600 * 24)
}

export default getDaysDiffBetweenDates
