function Input({
  id,
  type,
  classObj,
  placeholder,
  width,
  label,
//   checked = null,
  handler,
  value,
  error = false,
  errorText
}) {
  return (
    <div className={width}>
      <input
        id={id}
        key={id}
        value={value}
        type={type}
        onChange={handler || (() => {})}
        className={`pl-2 h-9 border-cBorder rounded-lg ${classObj}`}
        placeholder={placeholder}
      ></input>
      {
        error && errorText && (
          <p className="text-error text-left text-xs mt-1 pl-1">{errorText}</p>
        )
      }
      {label && (
        <label htmlFor={id} className={`peer-checked/${id}:text-primary`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Input;
