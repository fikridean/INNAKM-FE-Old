import { useState } from 'react';
import PortalList from "./PortalList";
import InputModal from '../components/InputModal';

export default function AllPortals() {
  try {
    return (
      <div>
        {/* <InputModal /> */}
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