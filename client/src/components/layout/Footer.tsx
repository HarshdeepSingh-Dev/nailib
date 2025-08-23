import { Github, Instagram, Twitter, ShieldCheck, BookOpenText, Users2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row flex-wrap gap-10 justify-between">
                {/* Logo and status */}
                <div className="flex flex-col gap-4 min-w-[220px]">
                    <div className="font-bold text-lg md:text-xl text-gray-900">NailIB</div>
                    <div className="flex items-center gap-2 text-sm md:text-md text-slate-600">
                        <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span>
                        All systems operational
                    </div>
                    {/* Trust badges illustration */}
                    <div className="flex gap-2 mt-2">
                        <ShieldCheck size={24} className="text-gray-400" />
                        <BookOpenText size={24} className="text-gray-400" />
                        <Users2 size={24} className="text-gray-400" />
                    </div>
                </div>
                {/* Footer text categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 flex-1">
                    <div>
                        <div className="font-semibold text-gray-700 mb-2 text-sm md:text-lg">Platform</div>
                        <ul className="space-y-1 text-sm md:text-md text-slate-600">
                            <li>Courses</li>
                            <li>Educators</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-700 mb-2 text-sm md:text-lg">Resources</div>
                        <ul className="space-y-1 text-sm md:text-md text-slate-600">
                            <li>Blog</li>
                            <li>Reviews</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-700 mb-2 text-sm md:text-lg">Support</div>
                        <ul className="space-y-1 text-sm md:text-md text-slate-600">
                            <li>Help Center</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-700 mb-2 text-sm md:text-lg">Legal</div>
                        <ul className="space-y-1 text-sm md:text-md text-slate-600">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom copyright + icons */}
            <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row items-center md:justify-between text-sm text-slate-400 gap-4 md:gap-0">
                <p>© {new Date().getFullYear()} NailIB. All rights reserved.</p>
                <div className="flex gap-4">
                    <Github size={18} />
                    <Instagram size={18} />
                    <Twitter size={18} />
                </div>
            </div>
        </footer>


    );
}

export default Footer;