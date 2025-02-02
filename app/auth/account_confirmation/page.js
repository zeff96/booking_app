import { AccountConfirmationForm } from "@/app/ui/auth/account-confirmation-form";

export default async function Page({ searchParams }) {
  const token = (await searchParams).token;

  return (
    <div>
      <h2>Click button below to verify your email</h2>
      <AccountConfirmationForm token={token} />
    </div>
  );
}
