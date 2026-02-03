export function PreviewSection({ header, inputData, sectionName }) {
   const rowData = Object.groupBy(inputData, (input) => input.row);

   return (
      <div className="preview-section">
         {header && <h2>{header}</h2>}
         <ul className={sectionName}>
            {Object.entries(rowData).map(([rowName, rowItems]) => (
               <div key={rowName} className={`row preview-${rowName}`}>
                  {rowItems.map((input) => (
                     <li key={input.id}>
                        {input.img && input.value && (
                           <img src={input.img}></img>
                        )}
                        <p>{input.value}</p>
                     </li>
                  ))}
               </div>
            ))}
         </ul>
      </div>
   );
}
