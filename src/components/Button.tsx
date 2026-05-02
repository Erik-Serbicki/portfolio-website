import type { ReactNode } from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    size?: "sm" | "default" | "lg"
}

export const Button = ({className="", size="default", children, ...props}: Props) => {

    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/25" 

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        default: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    }

    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

    return (
        <button className={classes} {...props}>
            <span className="relative flex flex-row items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}

