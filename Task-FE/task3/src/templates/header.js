import '../assets/styles/header.css'

const Header = () => {

    return (
        <div className="header">
            <img className='header-logo' src='https://onegreen.cloud/public/logo.svg' alt=' One Green Logo' />
            <div className='header-title-contact'>
                <h1 className='header-title'>Accelerate Your Online Success</h1>
                <div className='header-contact'>
                    Contact Us:
                    <a className='contact-click' href="mailto:contact@onegreen.cloud">
                        contact@onegreen.cloud
                    </a>
                </div>
            </div>
            <div className='header-menu'>
                <a className='menu-item' href='#'>Home</a>
                <a className='menu-item' href='#'>Services</a>
                <a className='menu-item' href='#'>Solutions</a>
                </div>
        </div>
    )
}
export default Header;