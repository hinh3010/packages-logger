import pino from 'pino'
import pretty from 'pino-pretty'
import dayjs from 'dayjs'

const stream = pretty({
  colorize: true,
  levelFirst: true,
  translateTime: `,'time':'${dayjs().format()}"`
})

export const SimpleLogger = pino(stream)
