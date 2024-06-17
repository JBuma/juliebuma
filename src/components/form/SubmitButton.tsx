"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" value="Submit">
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
