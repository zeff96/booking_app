import Link from "next/link";

const items = [
  {
    name: "model",
    path: "/",
  },
  {
    name: "reserve",
    path: "/reserve",
  },
  {
    name: "reserve",
    path: "/reserve",
  },
  {
    name: "reservations",
    path: "/reservations",
  },
  {
    name: "add motorcircle",
    path: "/add",
  },
  {
    name: "delete motorcircle",
    path: "/delete",
  },
];

export function SideItems() {
  let listItem = items.map((item) => (
    <li key={item.name}>
      <Link href={item.path}>{item.name}</Link>
    </li>
  ));

  return { listItem };
}
