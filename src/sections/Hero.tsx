import { Button } from "@/components/Button"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*BG*/}
            <div className="absolute inset-0">
                <img src="/bg-cracks.png" alt="Background Image" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/40" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, index) => (
                    <div className="absolute w-2 h-2 rounded-full opacity-60" 
                        style={{
                            backgroundColor: "#20B2A6", // Light Sea Green
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `soft-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}/>                
                ))}
            </div>

            {/*Content*/}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/*Left Column - Text*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Software Engineer • Network Admin • Tennis Coach 
                            </span>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Problem <span className="text-primary glow-text">solving</span> <br />with a<br /> 
                                <span className="font-serif italic font-normal text-white">passion</span>.
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Erik. I am a certified Dog Dad with an amazing Golden Retriever named Cheddar.                                 
                                I have a background in Physics and Computer Science, certifications in the IT space, and a knack for puns at precisley the right moment. Or the wrong one, depending on how you look at it. 
                                I am a lifelong learner, because honestly life would be pretty boring if we all knew everything.
                            </p>    
                        </div>
                        {/*CTAs*/}
                        <div className="flex relative items-center z-10 justify-center gap-3 animate-fade-in animation-delay-300">
                            <Button size="lg">Contact Me <ArrowRight className="w-5 h-5"/> </Button>
                            <AnimatedBorderButton />
                        </div>
                        {/*Social Links*/}
                        <div className="flex items-center gap-4 text-muted-foreground animate-fade-in animation-delay-400">
                            <span className="text-sm">Find me at:</span>
                            {[
                                {icon: Github, href: "https://github.com/Erik-Serbicki"},
                                {icon: Linkedin, href: "https://linkedin.com/in/erikserbicki"}
                            ].map((link, index) => (
                                <a key={index} href={link.href} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-200">
                                    {<link.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/*Right Column - Image*/}
                </div>
            </div>
        </section>
    )
}
