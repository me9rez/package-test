import { describe, it, expect } from 'vitest'
import { sum, minus } from '../src'

describe('minus test', () => {
    it('negative numbers', () => {
        expect(minus(-1, -2)).toBe(1)
    })

    it('positive and negative', () => {
        expect(minus(5, -3)).toBe(8)
    })

    it('zero and number', () => {
        expect(minus(0, 5)).toBe(-5)
        expect(minus(10, 0)).toBe(10)
        expect(minus(0, 0)).toBe(0)
    })

    it('decimal numbers', () => {
        expect(minus(1.5, 2.5)).toBe(-1)
    })

    it('large numbers', () => {
        expect(minus(1000000, 2000000)).toBe(-1000000)
    })

    it('small numbers', () => {
        expect(minus(0.1, 0.2)).toBe(-0.1)
    })

    it('small numbers', () => {
        expect(minus(0.1, 0.1)).toBe(0)
    })
    
})

describe('sum test', () => {
    
    it('negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3)
    })

    it('positive and negative', () => {
        expect(sum(5, -3)).toBe(2)
    })

    it('zero and number', () => {
        expect(sum(0, 5)).toBe(5)
        expect(sum(10, 0)).toBe(10)
        expect(sum(0, 0)).toBe(0)
    })

    it('decimal numbers', () => {
        expect(sum(1.5, 2.5)).toBe(4)
    })

    it('large numbers', () => {
        expect(sum(1000000, 2000000)).toBe(3000000)
    })
})