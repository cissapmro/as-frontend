import * as api from "@/api/site";
import { Search } from "@/components/site/search";
import { redirect } from "next/navigation";

type Props = { params: { id: string; } }
export const Page = async({ params }: Props) => {
    const eventItem = await api.getEvent(parseInt(params.id)); // id - 30
    if( !eventItem || !eventItem.status) return redirect('/');

    return(
       <main className="text-center mx-auto max-w-lg p-5">
        <header>
            <h1 className="text-3xl mt-5 mb-2">{ eventItem.title}</h1>
            <h2 className="text-2xl text-yellow-400">Amigo Secreto</h2>
            <p className="text-sm mb-5">{eventItem.description}</p>
        </header>
        <Search id={eventItem.id} />
        <footer>
            <p className="text-sm">Criado pela B7web</p>
        </footer>
       </main>
    )
}
export default Page;