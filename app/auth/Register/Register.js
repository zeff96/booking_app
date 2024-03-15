"use client";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "../../../lib/action";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Signup
    </button>
  );
}

const Register = () => {
  const [state, formAction] = useFormState(register, initialState);
  return (
    <form action={formAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <input
        type="password"
        name="password_confirmation"
        placeholder="Password_confirmation"
        required
      />
      <SubmitButton />
      <p>{state?.message}</p>
    </form>
  );
};

export default Register;
