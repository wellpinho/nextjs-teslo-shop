import { titleMontSerrat } from "@/config/fonts"

interface ITitle {
    title: string
    subtitle: string
}

export const Title = ({ title, subtitle }: ITitle) => {

    return (
        <div className={`mt-3 ${titleMontSerrat.className}`}>
            <h1 className="antialiased text-4xl font-semibold my-10">{title}</h1>

            {subtitle && (
                <h3 className="text-xl mb-5">{subtitle}</h3>
            )}
        </div>
    )
}