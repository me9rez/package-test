import { describe, it, expect } from 'vitest'
import { sum } from '../dist'

describe('sum test', () => {
    it('1+1', () => {
        expect(sum(1, 1)).toBe(2)
    })
})