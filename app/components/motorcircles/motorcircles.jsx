import { getServerSession } from "next-auth";
import { getMotorcircles } from "../../../lib/motorcircles/getMotorcircles";
import { options } from "../../api/auth/[...nextauth]/options";

export async function MotorCircles() {
  let session = await getServerSession(options);

  if (session) {
    let token = session.user.accessToken;
    let motorcircles = await getMotorcircles(token);
    console.log(motorcircles);
    return (
      <div>
        <h2>Select a motorcircle</h2>
      </div>
    );
  }
}
