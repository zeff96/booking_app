import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin");
  } else {
    return (
      <main className={styles.main} id="main">
        <button>logout</button>
      </main>
    );
  }
}
