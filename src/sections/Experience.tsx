const experiences = [
    {
        period: "Feb 2026 - Present",
        role: "Head Coach",
        company: "Youth Athletes United",
        description: "Head Coach for many different sports and ages, focusing on community, leadership, and team building.",
        technologies: ["Leadership", "Team Management", "Communication"],
        current: true,
    },
    {
        period: "2023-2026",
        role: "Homelab",
        company: "Personal",
        description: "Built a personal homelab for learning and experimenting, including Active Directory environments for Cybersecurity training, networking labs, and a variety of self hosted applications.",
        technologies: ["Proxmox", "Docker", "Ansible", "Networking", "Linux Administration"],
        current: false,
    },
    {
        period: "Sep 2022 - Sep 2023",
        role: "Technical Project Manager",
        company: "Coding Minds Academy",
        description: "Managed a team of up to 10 developers, spearheading project development, overseeing project timelines, and ensuring successful delivery of educational AI solutions.",
        technologies: ["Agile", "Project Planning", "Technical Requiremens"],
        current: false,
    },
    {
        period: "Nov 2020 - Sep 2023",
        role: "Project Lead",
        company: "Coding Minds Academy",
        description: "Lead developer on educational AI products, full stack development including database design, backend development, and frontend implementation.",
        technologies: ["Python", "React", "Typescript", "AI/ML"],
        current: false,
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/*BG Glows*/}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translatey-1/2" />
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header*/}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-md tracking-medium uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100"><span className="font-serif italic font-normal text-white">Connecting</span> my experiences.</h2>
                    <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">A timeline of my roles and experiences, showcasing my journey so far of learning and growing.</p>
                </div>
                {/*Timeline*/}
                <div className="relative">
                    <div className="timeline-glow absolue left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-y-1/2 shadow-[0_0_25px_rgba(32, 178, 166,0.8)]"/>

                    {/*Timeline Items*/}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx}></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
