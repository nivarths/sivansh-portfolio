export const StarsBackground = () => {
    const stars = new Array(100).fill(0);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {stars.map((_, i) => {
                const size = Math.random() * 2 + 1;
                const style = {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${Math.random() * 5}s`,
                };
                
                return(
                    <div key={i} className="absolute rounded-full bg-white opacity-70 animate-pulse" style={style}/>
                )
            })}
        </div>
    )
}