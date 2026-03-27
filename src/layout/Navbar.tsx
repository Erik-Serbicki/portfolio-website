import { Button } from "@/components/Button.tsx" 
import { Menu, X} from "lucide-react"
import { useState, useEffect } from "react"

{/*list of nav links*/}
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 ${ isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} right-0 z-50`} >
            <nav className="container mx-auto flex items-center justify-between px-6">
                <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
                    ES<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                {/* loop through navLinks and create a link for each */}
                {/* pass the index as a key to each link */}
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => ( 
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-full hover:bg-surface">
                                {link.label}
                            </a> 
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm"><a href="#contact">Contact Me</a></Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    <button className="p-2 text-foreground">{isMobileMenuOpen ? <X size={28}/> : <Menu size={26} />}</button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden glass-strong absolute top-full right-0 animate-fade-in">
                        <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-2">
                            {navLinks.map((link, index) => ( 
                                <a href={link.href} key={index} className="text-lg text-muted-foreground hover:text-primary px-4 py-2">
                                    {link.label}
                                </a> 
                            ))}
                            <Button >Contact Me</Button>
                        </div>
                    </div>
                )}

            </nav>
        </header>
    )
}
