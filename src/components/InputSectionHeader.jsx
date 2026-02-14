export function InputSectionHeader({ name, setShowInputs, showInputs }) {
   return (
      <div className="input-section-header">
         <h2>{name}</h2>
         <div className="input-header-buttons">
            {showInputs ? (
               <button onClick={() => setShowInputs(false)}>Submit</button>
            ) : (
               <button onClick={() => setShowInputs(true)}>Edit</button>
            )}
         </div>
      </div>
   );
}
