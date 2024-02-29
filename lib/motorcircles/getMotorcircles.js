export async function getMotorcircles(token) {
  try {
    let res = await fetch("http://localhost:3000/motorcircles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await res.json();
    return data;
  } catch (error) {
    return error?.message;
  }
}
