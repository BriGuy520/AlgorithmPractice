export function toBase64(str: string): string {
    // Encode this string to Base64
    return Buffer.from(str, 'utf-8').toString('base64');
  }
  
  export function fromBase64(str: string): string {
    // Decode this string from Base64
    return Buffer.from(str, 'base64').toString('utf-8');
  }