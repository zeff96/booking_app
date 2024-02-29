import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);

  if (!session) {
    redirect("/api/auth/signin");
  } else {
    return (
      <main className={styles.main} id="main">
        <p>Greetings{session.user.name}</p>
      </main>
    );
  }
}
