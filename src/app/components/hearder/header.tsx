"use client"
import "./header.scss";

import { Righteous } from 'next/font/google'

const righteous = Righteous ({weight: ['400'], subsets: ['latin']})

interface HeaderProps {

}

export function Header(props : HeaderProps){
    return(
        <div className="header">
            <h2 className={righteous.className}>Gerenciador de Tarefas</h2>
        </div>
    )
}