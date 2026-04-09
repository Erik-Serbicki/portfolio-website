import { ArrowUpRight } from "lucide-react"
import project1 from "@/assets/projects/project1.png"

const projects = [
    {
        title: "HomeLab",
        description: "My homelab includes a Proxmox node, Synology NAS, traefik reverse proxy, and a host of docker based services. Many of these compose files, along with my ansible setup to automate deployment and maintenence of my servers, are on my Github page.",
        image: project1,
        tags: ["Networking", "Docker", "Hypervisors"],
        link: "https://github.com/Erik-Serbicki",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/*BG Glows*/}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header*/}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that 
                        <span className="font-serif text-white italic font-normal"> connect.</span>
                     </h2>
                     <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
                        Some projects I am proud of, both large and small. 
                     </p>
                </div>
                                      
                {/*Projects Grid*/}
                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                    <a href={project.link} className="p-3 rounded-full glass-strong hover:bg-primary transition-all" target="_blank">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                            {/*Content*/}
                            <div className="p-6 space-y-4">
                               <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold mt-4 group-hover:text-secondary-foreground">{project.title}</h3>
                                    < ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                               </div> 
                               <p className="text-muted-foreground text-sm">{project.description}</p>
                               <div className="flex flex-wrap gap-2 mt-4 text-xs text-secondary-foreground">
                                    {project.tags.map((tag, tagIdx) => (
                                       <span key={tagIdx} className="rounded-full px-4 py-1.5 glass-strong text-xs font-medium hover:border hover:border-primary/50 transition-all duration-200">{tag}</span> 
                                    ))}
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
