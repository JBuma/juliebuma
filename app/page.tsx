import { ProjectList } from "./projects/ui/ProjectList";

export const revalidate = 360;

export default function Page() {
  async function onSubmit(data: FormData) {
    "use server";
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

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify(input),
    });
  }

  return (
    <>
      <div style={{ flexGrow: 1 }} id="intro" className="container column">
        <section className="container column">
          <h1>Julie Buma</h1>
          <h3>Frontend Developer</h3>
          <p>I'm working on a new site!</p>
          <p>
            You can still find some older projects on my{" "}
            <a href="https://github.com/JBuma" target="_blank">
              github
            </a>{" "}
            or{" "}
            <a href="https://codepen.io/JBuma" target="_blank">
              codepen
            </a>
            , or you can send me a message below!
          </p>
        </section>
        <form
          name="contact"
          className="container column gap-small"
          action={onSubmit}
        >
          <div className="input">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="input">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input">
            <label htmlFor="contact-message">Message</label>
            <textarea
              name="contact-message"
              id="message"
              cols={30}
              rows={3}
              placeholder="Message"
            ></textarea>
          </div>

          <div hidden>
            <label htmlFor="notforhuman">Don't fill this in</label>
            <input
              id="notforhuman"
              type="text"
              name="notforhuman"
              placeholder="do not fill"
            />
          </div>

          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="container column ">
        <ProjectList />
      </div>
    </>
  );
}
