"use client";
import { useFormState } from "react-dom";
import { SubmitButton } from "../../src/components/form/SubmitButton";
import { onSubmit } from "./actions";

export function Contact() {
  const [state, action] = useFormState(onSubmit, {});

  return state.finished ? (
    state.message
  ) : (
    <form name="contact" className="container column gap-small" action={action}>
      <div className="input">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" name="name" placeholder="Name" />
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

      <SubmitButton />
    </form>
  );
}
