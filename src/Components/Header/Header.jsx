import imgLogo from '../../Assest/img/logo.svg';
import './header.css';
const Header = () => {
  return (
    <header>
        <img src={imgLogo} className="brand-logo" alt="Logo Base Apparel" />
    </header>
  )
}

export default Header