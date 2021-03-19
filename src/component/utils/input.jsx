const Input = ({ name, label,errors, ...args}) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>{label} :</label>
      <input
        id={name}
        placeholder={`Enter your ${label}`}
        className="form-control" 
        name={name}
        {...args}
      />
      {errors && <div className="alertmisan alert alert-primary">{errors}</div>}
    </div>
  );
};

export default Input;
