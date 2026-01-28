export function PreviewSection({ inputData }) {
   return (
      <div className="preview-section">
         <ul>
            {inputData.map((input) => (
               <li key={input.id}>
                  <p>{input.value}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}
