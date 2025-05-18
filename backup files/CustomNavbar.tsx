import { QuartzComponentConstructor } from "./types"

// You'll need to create this CSS file
import style from "./styles/customNavbar.scss"

export default (() => {
  function CustomNavbar() {
    return (
      <header>
        <div id="links-header">
          <span>
            <a href="/">Home</a>
          </span>
          <span>
            <a href="/digital-garden">Digital Garden</a>
          </span>
          <span>
            <a href="/portfolio">Portfolio</a>
          </span>
          <span>
            <a href="/about">About Me</a>
          </span>
        </div>
        <hr style={{
          backgroundColor: "var(--gray)", 
          borderTop: "1px var(--gray) solid", 
          marginTop: "1.3rem"
        }}></hr>
      </header>
    )
  }
  
  CustomNavbar.css = style
  return CustomNavbar
}) satisfies QuartzComponentConstructor