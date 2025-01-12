import LoginForm from "@/app/ui/auth/sign-in-form";
export default function LoginPage() {
  return (
    <main className="w-full h-screen flex flex-col lg:items-center justify-center bg-slate-400 p-3">
      <LoginForm />
    </main>
  );
}
