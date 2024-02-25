export async function POST(request) {
  let body = await request.json();

  let data = {
    user: {
      email: body.email,
      password: body.password,
    },
  };

  try {
    let res = await fetch("http:localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let result = await res.json();

    return Response.json(result);
  } catch (error) {
    console.log(error);
  }
}
