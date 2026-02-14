export function PreviewSection({ header, inputData, sectionName }) {
   return (
      <div className="preview-section">
         {header && <h2>{header}</h2>}
         {inputData.map((inputSection, index) => (
            <ul key={`${sectionName}${index}`} className={sectionName}>
               {Object.entries(inputSection).map(([rowName, rowData]) => (
                  <li key={rowName} className={`row preview-${rowName}`}>
                     {Object.values(rowData).map((input) => (
                        <div key={input.id}>
                           {input.img && input.value && (
                              <img src={input.img} alt={input.alt}></img>
                           )}
                           <p>{input.value}</p>
                        </div>
                     ))}
                  </li>
               ))}
            </ul>
         ))}
      </div>
   );
}
