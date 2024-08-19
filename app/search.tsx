async function searchRequest(searchInput: string) {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
    const TERMPREFIX = process.env.NEXT_PUBLIC_TERM_PREFIX || '';
    const SEARCHPREFIX = process.env.NEXT_PUBLIC_SEARCH_BASE || '';
    const url = BASE_URL + TERMPREFIX + '/' + SEARCHPREFIX;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search: searchInput }),
    });

    return response.json();

  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default async function search(searchInput: string) {
  try {
    const data = await searchRequest(searchInput);

    if (!data) {
      return Response.json({ error: 'Data not found' });
    }

    return data;

  } catch (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{(error as Error).message}</p>
      </div>
    )
  }
}