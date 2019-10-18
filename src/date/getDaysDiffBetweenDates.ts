/**
 * 日期相差天数
 * @param dateInitial
 * @param dateFinal
 */
export function getDaysDiffBetweenDates(dateInitial: Date, dateFinal: Date) {
    return (dateFinal.getTime() - dateInitial.getTime()) / (1000 * 3600 * 24);
}
