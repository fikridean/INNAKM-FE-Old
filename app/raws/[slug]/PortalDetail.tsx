async function getPortalDetail(slug: string) {
  try {
    const BASE_URL = process.env.BASE_URL || '';
    const PORTAL_PREFIX = process.env.PORTAL_PREFIX || '';
    const url = BASE_URL + PORTAL_PREFIX + '/' + slug;

    const response = await fetch(url, {
      next: {
        revalidate: 20,
      }
    });
    return response.json();
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export default async function PortalDetail({ slug }: { slug: string }) {
  try {
    const portal = await getPortalDetail(slug);

    if (!portal) {
      return <div>Portal not found</div>;
    } else if (portal.error) {
      return <div>{portal.error}</div>;
    }

    return (
      <div className="card">
        {portal.data && (
          <>
            <h2>{portal.name}</h2>
            <p><span className="font-bold">Slug:</span> {portal.data.slug}</p>
            <p><span className="font-bold">Base URL:</span> {portal.data.base_url}</p>
            <p><span className="font-bold">Query:</span> {JSON.stringify(portal.data.query)}</p>
            <p><span className="font-bold">Web:</span> {portal.data.web}</p>
            <p><span className="font-bold">Species:</span> {portal.data.species}</p>
          </>
        )}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{(error as Error).message}</p>
      </div>
    )
  }
}