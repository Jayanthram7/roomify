export default function ArchLiftLogo({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Top left curve */}
            <path d="M 15 35 L 15 15 L 35 15 Q 15 15 15 35 Z" />

            {/* Top right curve */}
            <path d="M 65 15 L 85 15 L 85 35 Q 85 15 65 15 Z" />

            {/* Bottom left curve */}
            <path d="M 15 65 L 15 85 L 35 85 Q 15 85 15 65 Z" />

            {/* Bottom right curve */}
            <path d="M 65 85 L 85 85 L 85 65 Q 85 85 65 85 Z" />
        </svg>
    )
}
