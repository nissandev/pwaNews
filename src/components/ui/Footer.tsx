export function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-12 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Prothom Alo</h3>
                        <p className="text-gray-400 text-sm">
                            The highest circulated newspaper in Bangladesh.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Sections</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white">Bangladesh</a></li>
                            <li><a href="#" className="hover:text-white">International</a></li>
                            <li><a href="#" className="hover:text-white">Sports</a></li>
                            <li><a href="#" className="hover:text-white">Entertainment</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Follow Us</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Apps</h4>
                        <div className="flex flex-col gap-2">
                            <button className="bg-gray-800 px-4 py-2 rounded text-left hover:bg-gray-700">
                                <span className="text-xs text-gray-400 block">Get it on</span>
                                <span className="font-bold">Google Play</span>
                            </button>
                            <button className="bg-gray-800 px-4 py-2 rounded text-left hover:bg-gray-700">
                                <span className="text-xs text-gray-400 block">Download on the</span>
                                <span className="font-bold">App Store</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Prothom Alo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
