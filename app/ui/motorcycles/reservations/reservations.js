import { fetchReservations } from "@/app/actions/action";

export const Reservations = async () => {
  const reservations = await fetchReservations();

  return (
    <div>
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="border-t border-e border-s border-gray-300 p-3 last:border-b hover:bg-gray-200 flex items-center justify-between"
        >
          <div className="flex gap-2 items-center">
            <span className="font-semibold text-xl">
              {reservation.motorcycle_name}
            </span>
            <span>{reservation.city}</span>
          </div>

          <span className="italic text-sm text-gray-400">
            {reservation.date}
          </span>
        </div>
      ))}
    </div>
  );
};
