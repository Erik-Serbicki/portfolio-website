

export const Button = ({className, size, children}) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/80 shadow-lg shadow-primary/25" 
    const classes = baseClasses
    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}

