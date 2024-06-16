

export default function () {
  return (
    <>
      <main
        style={{ flexGrow: 1 }}
        id="intro"
        className="container column gap-medium p-medium"
      >
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
        <form name="contact" className="container column gap-small">
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

          <input type="submit" value="Send" />
        </form>
      </main>
    </>
  );
}
