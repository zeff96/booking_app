import { Reservations } from "@/app/ui/motorcycles/reservations/reservations";

export default function Page() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-10">
        My Reservations
      </h2>
      <Reservations />
    </div>
  );
}
