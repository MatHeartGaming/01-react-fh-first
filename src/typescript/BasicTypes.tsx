import React from 'react'

export const BasicTypes = () => {
    
    const name: string = 'Matteo';
    const age: number = 30;
    const isActive: boolean = true
    const powers: string[] = ['Super fuerza', 'Velocidad', 'Volar']
    
    return (
    <>
        <h3>Tipos Basicos</h3>
        {name} - {age} - {isActive}
        <br />
        {powers.join(', ')}
    </>
  )
}
