"use client";

import { useSearchParams } from "next/navigation";
import Button from "./Button";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const confirmationToken = searchParams.get("confirmation_token");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/auth/account_confirmation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ confirmation_token: confirmationToken }),
        }
      );

      const { message } = await res.json();
      setMessage(message);
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <div>
      <h2>Click link below to confirm your account</h2>
      <Button onClick={handleSubmit} />
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
