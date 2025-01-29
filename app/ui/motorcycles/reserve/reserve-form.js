export function ReserveForm({ username, motorcycleId }) {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          readOnly
          value={username}
          className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="motorcycleId" className="sr-only">
          motorcycle
        </label>
        {motorcycleId ? (
          <input
            type="text"
            id="motorcycleId"
            name="motorcycleId"
            readOnly
            value={motorcycleId}
            className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
          />
        ) : (
          <select
            className="appearance-none block w-full p-3 border border-gray-300 rounded-md"
            defaultValue="Select motorcycle..."
          >
            <option disabled defaultValue="Select motorcycle...">
              Select motorcycle...
            </option>
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
