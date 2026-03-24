export function urlCode(complexityParam: string): string {
  return complexityParam.split(',').join('-');
}

export function urlDecode(
  complexityParam: string
): string {
  return complexityParam.split('-').join(',');
}
