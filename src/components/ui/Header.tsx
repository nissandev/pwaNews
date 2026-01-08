import { Menu, Search, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-500">
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
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link to="/" className="text-3xl md:text-4xl font-bold text-primary dark:text-red-600 font-serif">
                        Prothom Alo
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex gap-6 font-medium text-gray-700">
                        <Link to="/bangladesh" className="hover:text-primary">Bangladesh</Link>
                        <Link to="/international" className="hover:text-primary">International</Link>
                        <Link to="/sports" className="hover:text-primary">Sports</Link>
                        <Link to="/opinion" className="hover:text-primary">Opinion</Link>
                        <Link to="/business" className="hover:text-primary">Business</Link>
                        <Link to="/entertainment" className="hover:text-primary">Entertainment</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-primary text-primary rounded hover:bg-red-50 font-medium">
                        <User className="w-4 h-4" />
                        <span className="hidden md:inline">Login</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
