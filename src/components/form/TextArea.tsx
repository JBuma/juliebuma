interface TextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
}

export function TextArea({ label, id, name, placeholder }: TextAreaProps) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        cols={30}
        rows={3}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
