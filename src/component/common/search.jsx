const SearchBox = ({value, onChange}) => {
 return ( 
  <input 
  type="search"
  name ="searchQuery"
  className="form-control mb-4"
  placeholder="Qidirayotgan element nomini kiriting"
  value ={value}
  onChange={(e) => onChange(e.target.value)}
  />
  );
}
 
export default SearchBox;