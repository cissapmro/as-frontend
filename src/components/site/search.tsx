
"use client"
import { SearchResult } from "@/types/SearchResult";
import { use, useState } from "react";
import { SearchForm } from "./searchForm";
import * as api from "@/api/site"
import { SearchReveal } from "./searchReveal";

type Props = {
    id: number;
}
export const Search = ({ id }: Props) => {

    //vai armazenar o resultado da minha busca
    const [results, setResults] = useState<SearchResult>();
    const [loading, setLoading] = useState(false);

    const handleSearchButton = async(cpf: string) => {
        if(!cpf) return;
        setLoading(true);
        const result = await api.searchCPF(id, cpf);
        setLoading(false);
        if(!result) return alert("dados não encontrados");
        
        setResults(result);
    }
    

    return(
        <section className="bg-gray-900 rounded p-5">
            {/*//QUando clicar no botão do form vai chamar esta função trazendo o cpf - props onSearchButton do tipo funçao*/}
            {!results && <SearchForm loading={loading} onSearchButton={handleSearchButton} />} {/*//onSearchButton - props que recebe uma função pra cá*/}
            {results && <SearchReveal results={results} />}
        </section>
    )  
}