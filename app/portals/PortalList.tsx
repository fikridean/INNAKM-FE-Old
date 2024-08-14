import Link from 'next/link';
import Button from '../components/Button';

async function getAllPortals() {
  try {
    const BASE_URL = process.env.BASE_URL || '';
    const PORTAL_PREFIX = process.env.PORTAL_PREFIX || '';
    const url = BASE_URL + PORTAL_PREFIX;

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

export default async function PortalList() {
  try {
    const portals = await getAllPortals();

    if (!portals) {
      return <div>Portals not found</div>;
    }

    return (
      <div>
        {portals['data'] &&
          portals['data'].map((data: {
            name: string,
            slug: string,
            base_url: string,
            query: Record<string, any>,
            web: string,
            species: string
          }, index: number) => (
            <div className="card" key={index}>
              <h2>{data.name}</h2>
              <p><span className="font-bold">Slug:</span> {data.slug}</p>
              <p><span className="font-bold">Base URL:</span> {data.base_url}</p>
              <p><span className="font-bold">Query:</span> {JSON.stringify(data.query)}</p>
              <p><span className="font-bold">Web:</span> {data.web}</p>
              <p><span className="font-bold">Species:</span> {data.species}</p>

              <Link href={`/portals/${data.slug}`}>
                <Button input="Detail" />
              </Link>
            </div>
          ))
        }
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