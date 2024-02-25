import { SearchResult } from "@/types/SearchResult";
import { req } from "./axios"
import { Event } from '@/types/Event'

//Função pra pegar o evento
export const getEvent  = async(id: number): Promise<Event | false> => {
    const json = await req.get(`/events/${id}`);
    console.log(json);
    return json.data.event as Event ?? false; //se existir retorna ele senão retorna false - type Event
}

//Função para buscar o id do evento e o cpf
//dados quem eu sou e quem eu tirei.
export const searchCPF = async(eventId: number, cpf: string): Promise<SearchResult | false> => {
    const json = await req.get(`events/${eventId}/search?cpf${cpf}`)
    if(json.data.person && json.data.personMatched) {
        return json.data as SearchResult;
    }
    //Não achou o cpf/a pessoa neste evento.
    return false;
}
