const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starpships/`)
  return res.json()
}