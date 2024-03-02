import Link from "next/link";

const items = [
  {
    name: "model",
    path: "/motorcircles",
  },
  {
    name: "reserve",
    path: "/motorcircles/reserve",
  },
  {
    name: "reservations",
    path: "/motorcircles/reservations",
  },
  {
    name: "add motorcircle",
    path: "/motorcircles/addMotorcircle",
  },
  {
    name: "delete motorcircle",
    path: "/motorcircles/deleteMotorcircle",
  },
];

export function SideItems() {
  let listItem = items.map((item) => (
    <li key={item.name}>
      <Link href={item.path}>{item.name}</Link>
    </li>
  ));

  return <ul>{listItem}</ul>;
}
