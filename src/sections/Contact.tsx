import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"

const contact_info = [
    {
        icon: Mail,
        label: "Email",
        value: "erik@serbicki.com",
        href: "mailto:erik@serbicki.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (707) 320-3941",
        href: "tel:+17073203941",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Los Angeles, CA",
        href: "#",
    }
]
export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleSubmit = async (e) => {
       e.preventDefault() 
    }

    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get in Touch</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Let's 
                        <span className="font-serif text-white italic font-normal"> connect.</span>
                     </h2>
                     <p className="text-muted-foreground text-lg animate-fade-in animation-delay-200">
                        Work with me! I am always open to new opportunities, collaborations, or just a chat about tech, physics, or tennis.
                     </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2" >
                                    Name
                                </label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 glass rounded-2xl border border-border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 glass rounded-2xl border border-border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                    rows={5} 
                                    id="message"  
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required 
                                    placeholder="Your message" 
                                    className="w-full px-4 py-3 glass rounded-2xl border border-border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <Button className="w-full" type="submit" size="lg">
                                Send Message
                                <Send />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
