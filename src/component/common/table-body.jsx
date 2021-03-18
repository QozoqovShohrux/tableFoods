import {get} from "lodash";
const TableBody = ({columns,data}) => {
 const getColumnData = (item,column) => {
    if(column.content) return column.content(item);
    else return get(item, column.path);
 }
 return ( 
  <tbody>
        {data.map((item) =>(
        <tr key={item._id} >
              {columns.map(column => (
                <td key={column.path || column.label }>
                  {getColumnData(item,column)} 
                </td>
              ))}
            </tr>)
        )}
      </tbody>
  );
}
 
export default TableBody;