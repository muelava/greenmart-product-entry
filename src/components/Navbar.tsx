import logo from '/vite.svg'

const Navbar = () => {
    return (
        <nav className='fixed top-0 bg-white left-0 right-0 border-b border-slate-200 py-4 px-4 md:px-6'>
            <ul className='flex'>
                <li>
                    <a href="/" className='flex items-center gap-3'>
                        <img src={logo} alt={logo} />
                        <span className='text-emerald-500'>Green Mart</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar