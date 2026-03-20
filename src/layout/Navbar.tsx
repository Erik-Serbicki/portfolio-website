import { Button } from "@/components/Button.tsx" 

{/*list of nav links*/}
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 bg-transparent py-5 right-0">
            <nav className="container mx-auto flex items-center justify-between px-6">
                <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
                    ES<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="flex items-center gap-1">
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
                <div>
                    <Button>Contact Me</Button>
                </div>
            </nav>
        </header>
    )
}
