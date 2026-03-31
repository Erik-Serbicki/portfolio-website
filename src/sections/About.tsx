import { Lightbulb, Atom, UsersRound, NotebookPen } from "lucide-react"

const highlights = [
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Utilizing my physics background, I not only solve complex challeges, but create tools and workflows so I don't have to solve them twice."
    },
    {
        icon: UsersRound,
        title: "Managing",
        description: "I excel when working with others, and love sharing experiences and learning."
    },
    {
        icon: NotebookPen,
        title: "Certifications",
        description: "CompTIA Network+"
    },
    {
        icon: Atom,
        title: "Data Processing",
        description: "I have worked on advanced data processing projects in Python, including cleaning, transforming, and analyzing large datasets from CERN."
        
    },
]

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/*Left Column*/}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-md tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Paving the road
                            <span className="font-serif italic font-normal text-white"> to a more connected world.</span>
                        </h2>
                        <div className="space-y-4 animate-fade-in animation-delay-200 text-muted-foreground">
                            <p>
                                What does <span className="italic">connection</span> mean? To me, it has two different meanings: connecting ideas, and connecting with community. The former is what every strong 
                                engineer needs to do, and the latter is the goal of all the projects I build and work I do. 
                            </p>
                            <p>
                                I have 2+ years of experience as a Technical Project Manager, 3+ as a Software Engineer, 4+ as a Tennis Coach, a networking certification, a homelab setup, and a degree in Physics. I <span className="italic">connect</span> ideas from across these different disciplines.
                                Phyiscs gives me problem solving, a curious mind, and a drive to learn (and no fewer than three notebooks filled with integrals). 
                            </p>
                            <p>
                                My love of homelabbing and my Network+ certification give me an intimate familiarity with bugs, issues, and things not working. 
                                Managing gives me the desire to see projects to their completion, and an understanding of how to work with others to get there, regardless of their diverse backgrounds and outlooks. Coaching gives me patience, the ability to explain complex or technical concepts in simple terms,
                                and is my primary <span className="italic">connection</span> to my community.
                            </p>
                        </div>
                    </div>

                    {/*Right Column - Highlights*/}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {highlights.map((highlight, index) => (
                            <div className="glass rounded-2xl p-6 gap-4 animate-fade-in" key={index} style={{animationDelay: `${(index+1) * 100}ms`}}>
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary hover:bg-primary/20 hover:text-white"><highlight.icon className="w-6 h-6"/></div>
                                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                                <p className="text-muted-foreground text-sm">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
