import { getServerSession } from "next-auth";
import { getMotorcircles } from "../../lib/motorcircles/getMotorcircles";
import { options } from "../api/auth/[...nextauth]/options";

export default async function MotorCircles() {
  let session = await getServerSession(options);

  if (session) {
    let token = session.user.accessToken;
    let motorcircles = await getMotorcircles(token);
    let listMotorcircles = motorcircles.map((motor) => (
      <li key={motor.id}>
        <h2>{motor.name}</h2>
        <img src={motor.image} alt={motor.name} />
        <p>{motor.bio}</p>
      </li>
    ));
    return (
      <div>
        <h2>Select a motorcircle</h2>
        {<ul>{listMotorcircles}</ul>}
      </div>
    );
  }
}
