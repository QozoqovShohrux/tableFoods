const option = [
 {_id : "Kg", name : "Kg"},
 {_id : "Dona", name : "Dona"},
 {_id : "Litr", name : "Litr"},
]

const Select = ({ name, label,errors,options = option  , ...args}) => {
 return (
   <div className="form-group mt-4">
     <label htmlFor={name}>{label} :</label>
     <select id={name} className="form-control" name={name} {...args}>
     <option value=""></option>
     {options.map(({_id, name})=>  (
      <option key={_id} value={_id}>
       {name}
      </option>
     ))}
     </select>
     {errors && <div className="alertmisan alert alert-primary">{errors}</div>}
   </div>
 );
};

export default Select;
