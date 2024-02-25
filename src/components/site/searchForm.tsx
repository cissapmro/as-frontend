"use client"

import { escapeCpf } from "@/utils/escapeCpf";
import { useState } from "react";

type Props = {
    //está vindo do search
    onSearchButton: (cpf: string) => void; 
    loading: boolean;
}
export const SearchForm = ({ onSearchButton, loading }: Props) => {

    const [cpfInput, setCpfInput] = useState('');

return(
    <div>
        <p className="text-xl mb-3">Qual seu CPF?</p>
        <input 
        type="text"
        inputMode="numeric"
        placeholder="Digite seu CPF"
        className="w-full ouline-none bg-white text-black text-4xl text-center rounded-lg p-3 disabled:opacity-20"
        autoFocus
        value={cpfInput}
        onChange={(e) => setCpfInput(escapeCpf(e.target.value))} //formatar o cpf para tirar os pontos
        disabled={loading}
        />
        <button 
        className="bg-blue-800 text-white text-4xl rounded-lg w-full p-3 mt-3 
        border-blue-600 border-t-4 active:border-0 disabled: opacity-20" 
        onClick={() => onSearchButton(cpfInput)}
        disabled={loading}
        >{loading ? "Buscando..." : "Enviar"}</button>
    </div>
)
}