
import logoPath from '../images/Vector.svg'


function Header(){
    return (      
    <header className="header">
        <img className="logo" src={logoPath} alt="лого Место" />
    </header>
)
}

export default Header