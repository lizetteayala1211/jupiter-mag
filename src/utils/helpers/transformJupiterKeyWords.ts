export const transformJupiterKeyWords = (str: string) => {
  if (str === "semiMajorAxis") return "semi-major axis"
  const result = str.replace(/([A-Z])/g, " $1")
  return result.charAt(0).toUpperCase() + result.slice(1)
}
