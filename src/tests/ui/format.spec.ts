import { formatNumber } from '@/ui/format'

describe('formatNumber', () => {
  test.each`
    number     | expected
    ${0}       | ${'0'}
    ${1}       | ${'1'}
    ${999}     | ${'999'}
    ${1000}    | ${'1,000'}
    ${999999}  | ${'999,999'}
    ${1000000} | ${'1,000,000'}
  `('returns $expected when number is $number', ({ number, expected }) => {
    expect(formatNumber(number)).toBe(expected)
  })
})
