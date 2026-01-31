export function PreviewSection({ inputData, sectionName }) {
   const rowData = Object.groupBy(inputData, (input) => input.row);

   return (
      <div className="preview-section">
         <ul className={sectionName}>
            {Object.entries(rowData).map(([rowName, rowItems]) => (
               <div key={rowName} className={`row preview-${rowName}`}>
                  {rowItems.map((input) => (
                     <li key={input.id}>
                        <p>{input.value}</p>
                     </li>
                  ))}
               </div>
            ))}
         </ul>
      </div>
   );
}
