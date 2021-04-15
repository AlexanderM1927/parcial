/*
1826937
John Alexander Martinez
*/
import { useState } from 'react'
import PropTypes from 'prop-types'

const Parcial = ({propNum1, propNum2, usuario}) => {
    const [cuenta, setCuenta] = useState(null);

    return (
        <>
        {propNum1} y {propNum2}<br></br>
        <button onClick={( () => setCuenta(propNum1 + propNum2))} > Sumar</button>
        <button onClick={( () => setCuenta(propNum1 - propNum2))} > Restar</button>
        <p>Señor, {usuario}. La suma o la resta es {cuenta}</p>
        <br/>
       
        </>
    )
}

Parcial.propTypes = {
    propNum1: PropTypes.number.isRequired,
    propNum2: PropTypes.number.isRequired,
    usuario: PropTypes.string.isRequired,
}

export default Parcial;