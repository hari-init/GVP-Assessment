function Radio({
    id,
    type,
    classObj,
    placeholder,
    width,
    label,
    checked = null,
    handler,
    value
  }) {
    return (
      <div className={width}>
        <input
          id={id}
          key={id}
          type='radio'
          onClick={handler || (() => {})}
          className={`pl-2 h-9 border-cBorder rounded-lg ${classObj}`}
          placeholder={placeholder}
          checked={checked}
        ></input>
        {label && (
          <label htmlFor={id} className={`text-pHolder`}>
            {label}
          </label>
        )}
      </div>
    );
  }
  
  export default Radio;
  