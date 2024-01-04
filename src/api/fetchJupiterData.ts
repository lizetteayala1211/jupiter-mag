const JupiterBodyIndex = 238

export const fetchJupiterData = async () => {
  const response = fetch("https://api.le-systeme-solaire.net/rest/bodies/")
  const data = (await response).json()
  return data.then((d) => d.bodies[JupiterBodyIndex])
}
