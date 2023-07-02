'use client';

import Link from 'next/link';
import React from 'react';
import SignInButton from './SignInButton';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center" />
      <p className="flex flex-end">
        <Link href="/">SCOUTS</Link>
      </p>
      <div className="sm:flex hidden">
        {/* <Link className="outline_btn mr-1">Scout Client</Link> */}
        {/* <div onclick={ScoutClient}>s</div> */}
        <SignInButton />
      </div>
    </nav>
  );
};

export default Nav;
