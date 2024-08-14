
import Logo from "../Image/logo.png";
import './Footer.css';


export default function Footer(){
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                    <img src={Logo}/>
                    <p>SHOPPER</p>
                </div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <h1><ion-icon name="logo-facebook"></ion-icon></h1>
                    </div>
                    <div className="footer-icons-container">
                        <h1><ion-icon name="logo-instagram"></ion-icon></h1>
                    </div>
                    <div className="footer-icons-container">
                        <h1><ion-icon name="logo-whatsapp"></ion-icon></h1>
                    </div>
                    <div className="footer-icons-container">
                        <h1><ion-icon name="logo-pinterest"></ion-icon></h1>
                    </div>
                </div>
                <div className="footer-copyright">
                    <hr />
                    <p>Copyright @ 2020 - All Right Reserved</p>
                </div>
            </div>
        </>
    )
}