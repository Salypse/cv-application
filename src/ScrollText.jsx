import ScrollLogo from "./assets/img/scroll-down.svg";

export function ScrollText() {
   return (
      <div className="scroll-text">
         <img src={ScrollLogo}></img>
         <p>Scroll Down to View Live Preview</p>
      </div>
   );
}
