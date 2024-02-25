import * as api from "@/api/site"
import { Search } from "@/components/site/search";
import { redirect } from "next/navigation";

type Props = {
    params: {
        id: string;
    }
}
export const Page = async({params}: Props) => {

    //quando vem da url é uma string, mas id é number, então tem que usar o parseInt
    const eventItem = await api.getEvent(parseInt(params.id)); // id - 30
    // console.log(eventItem);
   
    //verifica se existe o eventItem
    if( !eventItem || !eventItem.status) return redirect('/');

    return(
       <main className="text-center mx-auto max-w-lg p-5">
        <header>
            <h2 className="text-2xl text-yellow-400 p-5">Amigo Secreto</h2>
            <h1 className="text-3xl">{ eventItem.title}</h1>
            <p className="text-sm">{eventItem.description}</p>
        </header>
        <Search id={eventItem.id} />
        <footer>
            <p className="text-sm">Criado pela B7web</p>
        </footer>
       </main>
    )
}
export default Page;