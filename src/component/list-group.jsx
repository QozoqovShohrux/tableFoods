import PropTypes from "prop-types";
import React, { Component } from 'react';

export default class ListGroup extends Component {
  static defaultProps ={
    idKey : "_id",
    textKey: "name"
  }
  render() {
    const { selectCategory, categoryItems, onSelectChange, idKey, textKey} = this.props;
    return (
      <ul className="list-group">
        {categoryItems.map((category) => (
          <li
            onClick={() => onSelectChange(category)}
            className = {
              "list-group-item " +
              (selectCategory?.[idKey] === category?.[idKey] && " active")
            }
            key={Math.random()}
          >
            {category?.[textKey]}
  
          <span  className="badge badge-warning float-right">1</span>
          </li>
        ))}
      </ul>
    );
  }
}
ListGroup.propTypes = {
  idKey : PropTypes.string.isRequired,
  textKey : PropTypes.string.isRequired,
  categoryItems : PropTypes.array.isRequired,
  selectCategory : PropTypes.object.isRequired,
  onSelectChange : PropTypes.func.isRequired
}
// import PropTypes from "prop-types"
// const ListGroup=({ selectCategory, categoryItems, onSelectChange, idKey = "_id", textKey="name" }) => {
//   return (
//     <ul className="list-group">
//       {categoryItems.map((category) => (
//         <li
//           onClick={() => onSelectChange(category)}
//           className = {
//             "list-group-item " +
//             (selectCategory?.[idKey] === category?.[idKey] && " active")
//           }
//           key={Math.random()}
//         >
//           {category?.[textKey]}

//         <span  className="badge badge-warning float-right">1</span>
//         </li>
//       ))}
//     </ul>
//   );
// };
// ListGroup.propTypes = {
//   idKey : PropTypes.string.isRequired,
//   textKey : PropTypes.string.isRequired,
//   categoryItems : PropTypes.array.isRequired,
//   selectCategory : PropTypes.object.isRequired
// }
// export default ListGroup;

