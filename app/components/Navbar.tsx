"use client";

import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../public/logo.png';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Image
        src={Logo}
        alt='INNAKM'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>INNAKM</h1>
      <Link href="/portals" className={pathname === '/portals' ? 'active' : ''}>
        Portal
      </Link>
      <Link href="/portals/detail" className={pathname === '/portals/detail' ? 'active' : ''}>
        Portal Detail
      </Link>
    </nav>
  );
}
