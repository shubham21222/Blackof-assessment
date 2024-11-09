import Logo from '../../ui/Logo'

const FooterLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Software Service', path: '/software' },
    { name: 'Follow us', path: '/followus' },
];

const otherLinks = [
    { name: 'Privacy Policy', path: '/products' },
    { name: 'Terms & Conditions', path: '/software' },
    { name: 'Cookie Policy', path: '/followus' },
]

const Footer = () => {
    return (
        <>
            <div className='container-footer pt-[50px]'>
                <div className="py-[35px] flex justify-between items-center w-full mx-auto flex-col md:flex-row">
                    <div className="flex gap-4 items-center mb-6 md:mb-0">
                        <Logo />
                        <h1 className="text-white text-center md:text-left">Smart Lights</h1>
                    </div>
                    <nav className='flex flex-col md:flex-row items-center gap-8'>
                        <ul className="flex gap-6 flex-wrap justify-center md:justify-start">
                            {FooterLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path} className="text-white hover:text-gray-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='border-b-2 w-[60%] flex justify-center items-center md:hidden lg:justify-start pt-[160px] mx-auto'></div>
                <div className='border-b-2 w-[60%] flex flex-start md:block pt-[160px]  hidden'></div>

                <div>
                    <ul className="flex gap-6 py-8 flex-wrap justify-center md:justify-start">
                        {otherLinks.map((link, index) => (
                            <li key={index} className="flex items-center">
                                <a href={link.path} className="text-white hover:text-gray-300">
                                    {link.name}
                                </a>
                                {index < otherLinks.length - 1 && (
                                    <span className="mx-7 text-white hidden md:inline">|</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;
