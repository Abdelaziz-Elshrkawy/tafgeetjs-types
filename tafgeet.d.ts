// Type definitions for tafgeetjs
// Project: tafgeetjs types
// Definitions by: Abdelaziz-Elshrkawy <abdelaziz.elshrkawy53@yahoo.com>
// TypeScript Version: 4.0+

export as namespace tafgeetjs;

/**
 * Supported currency codes for tafgeetjs.
 * This type is a template literal type, not an enum, so it is not exposed at runtime.
 */
export type TafgeetCurrency =
  | "SDG"
  | "SAR"
  | "QAR"
  | "AED"
  | "EGP"
  | "USD"
  | "AUD"
  | "TND"
  | "TRY";

export interface TafgeetOptions {
  style?: "formal" | "informal";
  currency?: TafgeetCurrency;
  // Add more options as needed
}

/**
 * Tafgeet class for converting numbers to Arabic words for currencies.
 */
export class Tafgeet {
  /**
   * Create a Tafgeet instance.
   * @param digit The number to convert.
   * @param currency The currency code (optional).
   */
  constructor(digit: number | string, currency?: TafgeetCurrency);

  /**
   * Parse the number and return its Arabic words representation.
   */
  parse(): string;
}
