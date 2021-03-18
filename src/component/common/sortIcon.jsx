import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai";

const SortIcon = ({sorted}) => {
 const Icon = sorted ? AiFillCaretDown : AiFillCaretUp;
 return ( 
  <Icon size="1rem" className="mx-2" color="#fff"/>
  );
}
 
export default SortIcon;