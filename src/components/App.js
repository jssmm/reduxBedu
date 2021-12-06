import React from 'react'

function App() {
  const ponerFilas = () => [
    <tr>
      <td>Jessen</td>
      <td>Jessen@gmail.com</td>
      <td>Jessen.com</td>
    </tr>,
    <tr>
      <td>Bethsabee</td>
      <td>Bethsabee@gmail.com</td>
      <td>Bethsabee.com</td>
    </tr>,
  ]

  return (
    <div className='margen'>
      <table className='tabla'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  )
}

export default App
