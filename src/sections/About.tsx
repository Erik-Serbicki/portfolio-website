import { Lightbulb, Atom, UsersRound, NotebookPen } from "lucide-react"

const highlights = [
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Utilizing my physics background, I not only solve complex challeges, but create tools and workflows so I don't have to solve them twice."
    },
    {
        icon: UsersRound,
        title: "Teamwork",
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
        description: "I have worked on advanced data processing projects in Python, including cleaning, transformin, and analyzing large datasets from CERN."
        
    },
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div>
                <div>
                    {/*Left Column*/}
                    <div>
                        <span>About Me</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
