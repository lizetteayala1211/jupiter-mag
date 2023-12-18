export function exhaustiveSwitchAssert(x: never): never {
  throw new Error(`Unhandled switch case ${x}`)
}
