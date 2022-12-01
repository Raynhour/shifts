import dayjs from "dayjs"

export function dateFormatted(date) {
  return dayjs(date).format('DD.MM.YYYY')
}

export function timeFormatted(time) {
  return dayjs(time).format('HH:mm')
}