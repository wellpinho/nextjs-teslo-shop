import { notFound } from "next/navigation"

interface Props {
    params: {
        id: string
    }
}

const Admin = ({ params }: Props) => {
    const { id } = params

    if (id === 'kids') {
        notFound();
    }

    return (
        <div>
            <h1>Category page { id }</h1>
        </div>
    )
}

export default Admin
