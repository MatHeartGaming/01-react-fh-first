import React from 'react'

export const BasicFunctions = () => {

    const addNumbers = (a:number, b: number) => {
        return a + b
    }

    const sum = addNumbers(5.123, 10.51)

    return (
        <> 
            <h3>Functions</h3>
            <span>El resultado de sumar: {sum} </span>
        </>
  )
}
