import React from "react";
import style from "./App.module.scss";
import ButtonSection from "./components/ButtonSection/ButtonSection";

function App() {
  return (
    <div className={style.wrapperDocument}>
      <div className={style.wrapper}>
        <nav className={style.navbar}>
          <div className={style.container}>
            <div className={style.navbarBrand}>
              <a href="https://mobiri.se" className={style.logoLink}>
                <img
                  className={style.navbarLogo}
                  src="https://r.mobirisesite.com/1161105/assets/images/photo-1612408885627-efe742ec2d2a.jpeg"
                  alt="Mobirise Website Builder"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <ButtonSection />
    </div>
  );
}

export default App;
