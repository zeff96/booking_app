export async function POST(request) {
  let body = await request.json();

  try {
    let res = await fetch("http:localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
