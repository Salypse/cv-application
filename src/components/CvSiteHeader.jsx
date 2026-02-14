import HeaderLogo from "../assets/img/cv-header-icon.svg";

export function CvSiteHeader() {
   return (
      <header className="maker-header">
         <img src={HeaderLogo} alt="site logo"></img>
         <h1>Cv Maker</h1>
      </header>
   );
}
