import bureauLogo from "../assets/img/bureau-logo.svg";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <img src={bureauLogo} alt="bureau logo" className="bureau-logo" />
        </li>
      </ul>
    </header>
  )
}

export default Header;