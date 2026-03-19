export function codeUrl(complexityParam: string): string {
  return complexityParam.split(',').join('-');
}

export function decodeUrl(
  complexityParam: string
): string {
  return complexityParam.split('-').join(',');
}
