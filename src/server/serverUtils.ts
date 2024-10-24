import "server-only";

export async function oNetApi<responseData>(route: string) {
  return fetch(`https://services.onetcenter.org/ws/${route}`, {
    headers: {
      Authorization: "Basic Y2FyZWVyX2pheWJvdDoyNzI5dmF0",
      Accept: "application/json",
    },
  })
    .then((res) => res.json() as Promise<responseData>)
    .then((r) => ({ ...r, error: false as const }))
    .catch((error) => ({ error: true as const }));
}
