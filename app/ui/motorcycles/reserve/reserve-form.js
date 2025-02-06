import { reserveMotorcycle } from "@/app/actions/action";

export function ReserveForm({ userId, motorcycleId, cities, motorcycles }) {
  const reservationWithUser = reserveMotorcycle.bind(null, userId);

  return (
    <form action={reservationWithUser}>
      <div className="mb-3">
        <label htmlFor="motorcycle" className="sr-only">
          motorcycle
        </label>
        {motorcycleId ? (
          <input type="hidden" name="motorcycle" value={motorcycleId} />
        ) : (
          <select
            name="motorcycle"
            id="motorcycle"
            className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
            defaultValue="Select motorcycle..."
          >
            <option disabled defaultValue="Select motorcycle...">
              Select motorcycle...
            </option>
            {motorcycles.map((motorcycle) => (
              <option key={motorcycle.id} value={motorcycle.id}>
                {motorcycle.name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="sr-only">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="sr-only">
          City
        </label>
        <select
          id="city"
          name="city"
          className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
          defaultValue="Select city..."
        >
          <option disabled defaultValue="Select city...">
            Select city...
          </option>
          {cities.map((city) => (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid">
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700"
        >
          Create Reservation
        </button>
      </div>
    </form>
  );
}
