import { Download } from "lucide-react"

export const AnimatedBorderButton = () => {
    return (
        <button className="relative bg-transparent border border-border
            text-foreground  transition-all
            duration-500 focus:outline-none focus-visible:ring-2
            focus-visible:ring-primary focus-visible:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed group
            px-5 py-3 text-lg font-medium rounded-full overflow-visible
            animate-border border-animation"
        >
            <span className="relative flex items-center gap-2 justify-center z-10">
                <Download className="w-5 h-5"/>
                Download Resume
            </span>
        </button>
    )
}
