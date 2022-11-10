export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  fetch("https://foodie-express-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("foodie-token", data.token);
    });
};
