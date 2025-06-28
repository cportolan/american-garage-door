import "@/styles/Footer.css";

export default function Footer( {} ) {
    return(
        <footer className="footer">
            <div className="footer-container">
                <img src="/imgs/logo.png" alt="American Garage Door Logo" />
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services/residential">Residential</a></li>
                    <li><a href="/services/commercial">Commercial</a></li>
                    <li><a href="/services/automotive">Automotive</a></li>
                    <li><a href="/services/emergency">Emergency</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <hr className="footer-hr" />
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} American Garage Door & Key LLC. All rights reserved.</p>
                    <div className="footer-info_links">
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms & Conditions</a>
                        <a href="/cookie">Cookie Policy</a>
                        <a href="#">CCB #230380</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}