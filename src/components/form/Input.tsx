interface InputProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
}

export function Input({
  label,
  id,
  name,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
