import PortalList from "./PortalList";

export default function AllPortals() {
  try {
    return (
      <div>
        <h1>All Portals</h1>

        <PortalList />
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