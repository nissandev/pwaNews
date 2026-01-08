import { useState } from "react";
import { Menu, Search, User, Bell, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: "Bangladesh", path: "/bangladesh" },
        { name: "International", path: "/international" },
        { name: "Sports", path: "/sports" },
        { name: "Opinion", path: "/opinion" },
        { name: "Business", path: "/business" },
        { name: "Entertainment", path: "/entertainment" },
    ];

    return (
        <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-500 border-b border-gray-100 md:border-none">
                <div className="flex items-center gap-4">
                    <span>{currentDate}</span>
                    <span className="hidden md:inline">Dhaka</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/english" className="hover:text-primary">English</Link>
                    <Link to="/epaper" className="hover:text-primary">ePaper</Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-3 md:py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 hover:bg-gray-100 rounded-full md:hidden transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <Link to="/" className="text-2xl md:text-4xl font-bold text-primary dark:text-red-600 font-serif" onClick={closeMenu}>
                            Prothom Alo
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex gap-6 font-medium text-gray-700">
                            {navLinks.map((link) => (
                                <Link key={link.path} to={link.path} className="hover:text-primary transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
                            <Bell className="w-5 h-5" />
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-primary text-primary rounded hover:bg-red-50 font-medium text-sm md:text-base">
                            <User className="w-4 h-4" />
                            <span className="hidden md:inline">Login</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-700 font-medium hover:text-primary transition-colors"
                                onClick={closeMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="border-t my-2 border-gray-100"></div>
                        {/* Mobile specific extras could go here */}
                        <Link to="/epaper" className="py-3 px-4 hover:bg-gray-50 rounded-lg text-gray-500 font-medium" onClick={closeMenu}>
                            ePaper
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
