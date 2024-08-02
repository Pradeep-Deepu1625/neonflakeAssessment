// export default function InputFiled({textarea,Title,...props}){
//     return(
//         <p>
//             <label>{Title}</label>
//             {textarea ?  <textarea {...props}></textarea> : <input {...props} ></input>}
//         </p>
//     )
// }
import './InputFiled.css';

export default function InputFiled({ textarea, Title, ...props }) {
  return (
    <p className="input-field">
      <label>{Title}</label>
      {textarea ? (
        <textarea className="textarea" {...props}></textarea>
      ) : (
        <input className="input" {...props}></input>
      )}
    </p>
  );
}
