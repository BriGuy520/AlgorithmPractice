export function validBraces(braces: string): boolean {
  
  const open: RegExp|null = /{*/g
  const closed: RegExp|null = /}*/g
  return braces.match(open)?.toString().length === braces.match(closed)?.toString().length;
}