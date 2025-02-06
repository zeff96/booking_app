import { fetchCities } from "@/app/actions/action";
import getMotorcycles from "@/app/actions/motorcycles/motorcles";
import { verifySession } from "@/app/lib/dal";
import { ReserveForm } from "@/app/ui/motorcycles/reserve/reserve-form";

const Reserve = async ({ searchParams }) => {
  const motorcycleId = (await searchParams).motorcycleId;
  const { userId } = await verifySession();
  const cities = await fetchCities();
  const motorcycles = await getMotorcycles();

  return (
    <div className="w-full h-screen flex flex-col gap-y-4">
      <h2 className="text-center text-2xl font-semibold">Add reservation</h2>
      <ReserveForm
        userId={userId}
        motorcycleId={motorcycleId}
        cities={cities}
        motorcycles={motorcycles}
      />
    </div>
  );
};

export default Reserve;
