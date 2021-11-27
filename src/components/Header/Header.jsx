import LogoImage from "../../assets/logo.png"
import './header.styles.css'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={LogoImage} alt="logo de um deserto" />
            </div>
        </header>
    )
}

export default Header