export const getJupiterBasics = async () => {
  const apiKey: string = process.env.PLANET_API_KEY || ""

  const response = await fetch(
    "https://api.api-ninjas.com/v1/planets?name=jupiter",
    { headers: { "X-Api-Key": apiKey } }
  )
  const data = await response.json()
  return data[0]
}
