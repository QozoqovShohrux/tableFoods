import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({liked,onToggleLike}) => {
  const Icon = liked ? AiFillHeart : AiOutlineHeart;
  return (
    <Icon size='2rem' color='#ff5252' className='mr-2 liked-icon' onClick={onToggleLike}/>
  );
}
 
export default Like;