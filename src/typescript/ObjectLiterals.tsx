import React from 'react'

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    city: string;
    houseNumber: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: 'Matteo',
        lastName: 'Buompastore',
        age: 30,
        isAlive: true,
        address: {
            country: 'Italia',
            city: 'Potenza',
            houseNumber: 123,
        }
    }
    
    return (
        <>
        <h3>Objetos Literales</h3>
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </>
    )
}
