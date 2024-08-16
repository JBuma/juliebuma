"use client";
import { useFormState } from "react-dom";
import { SubmitButton } from "../../src/components/form/SubmitButton";
import { onSubmit } from "./actions";
import { Input } from "../../src/components/form/Input";
import { TextArea } from "../../src/components/form/TextArea";

export function Contact() {
  const [state, action] = useFormState(onSubmit, {});

  return state.finished ? (
    state.message
  ) : (
    <form name="contact" className="container column gap-small" action={action}>
      <Input label="Name" id="contact-name" name="name" />
      <Input label="Email" type="email" id="contact-email" name="email" />
      <TextArea label="Message" id="humanMessage" name="messageForHuman" />

      <div hidden>
        <label htmlFor="message">Don't fill this in</label>
        <input
          id="message"
          type="text"
          name="message"
          placeholder="do not fill"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
