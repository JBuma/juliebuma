"use server";
export async function onSubmit(previous, data: FormData) {
  if (data.get("notforhuman") !== "") {
    return;
  }

  const name = data.get("name");
  const message = data.get("contact-message");
  const email = data.get("email");

  const api_key = process.env.RESEND_KEY;

  const input = {
    from: "contact@juliebuma.com",
    to: "juliebuma@gmail.com",
    subject: `Message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`,
  };

  const result = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    },
    body: JSON.stringify(input),
  });

  if (result.ok) {
    return {
      finished: true,
      message: "Thank you for your message, I will get back to you soon!",
    };
  } else {
    return {
      finished: true,
      message: "Something went wrong, please try again later!",
    };
  }
}
