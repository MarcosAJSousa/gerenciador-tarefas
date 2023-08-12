'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { Card } from './components/card/card';
import { Header } from './components/hearder/header';

export default function Home() {
  const a = "Atividade 01";
  const b = true;
  const c = 1;
  return (
    <main className={styles.main}>
        <Header></Header>
        <div className='card-grid'>
          <Card todo={a} completed={b} userid={c}/>
          <Card todo={a} completed={b} userid={c}/>
          <Card todo={a} completed={b} userid={c}/>
        </div>
    </main>
  )
}
