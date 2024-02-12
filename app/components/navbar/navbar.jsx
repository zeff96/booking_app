import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Motorcircles</Link>
        </li>
        <li>
          <Link href="/">Reserve</Link>
        </li>
        <li>
          <Link href="/">Reservations</Link>
        </li>
        <li>
          <Link href="/">Add Motorcircle</Link>
        </li>
        <li>
          <Link href="/">Delete Motorcircle</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
