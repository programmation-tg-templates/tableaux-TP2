// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {maximum} from '../index';

describe('maximum', () => {
    test('maximum([10, 20, 30]) doit retourner 30', () => {
      expect(maximum([10, 20, 30])).toBe(30);
    });

    test('maximum([5, 15, 25, 35]) doit retourner 35', () => {
      expect(maximum([5, 15, 25, 35])).toBe(35);
    });

    test('maximum([100]) doit retourner 100', () => {
      expect(maximum([100])).toBe(100);
    });

    test('maximum([7, 3, 9, 2]) doit retourner 9', () => {
      expect(maximum([7, 3, 9, 2])).toBe(9);
    });

    test('maximum([-10, -20, -5]) doit retourner -5', () => {
      expect(maximum([-10, -20, -5])).toBe(-5);
    });

    test('maximum([0, 0, 0]) doit retourner 0', () => {
      expect(maximum([0, 0, 0])).toBe(0);
    });

    test('maximum([1, 2, 2, 1]) doit retourner 2', () => {
      expect(maximum([1, 2, 2, 1])).toBe(2);
    });

    test('maximum([Number.MAX_SAFE_INTEGER, 1, 2]) doit retourner Number.MAX_SAFE_INTEGER', () => {
      expect(maximum([Number.MAX_SAFE_INTEGER, 1, 2])).toBe(Number.MAX_SAFE_INTEGER);
    });

    test('maximum([Number.MIN_SAFE_INTEGER, -1, -2]) doit retourner -1', () => {
      expect(maximum([Number.MIN_SAFE_INTEGER, -1, -2])).toBe(-1);
    });
});