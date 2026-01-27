export function InputSectionHeader({ name, setShowInputs }) {
   return (
      <div className="input-section-header">
         <h2>{name}</h2>
         <button onClick={() => setShowInputs(true)}>Edit</button>
         <button onClick={() => setShowInputs(false)}>Submit</button>
      </div>
   );
}
