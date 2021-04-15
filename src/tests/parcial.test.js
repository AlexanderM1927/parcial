import Parcial from '../parcial'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente del parcial',()=>{


  test('Simular click boton suma',() => {
    const wrapper = shallow(<Parcial propNum1={10} propNum2={2} usuario="Alexander Martinez" />)
    wrapper.find('button').at(0).simulate('click')
    const resultado = wrapper.find('h2').text().trim()
    expect(resultado).toBe('12')
  })

  test('Simular click boton resta',() => {
    const wrapper = shallow(<Parcial propNum1={10} propNum2={2} usuario="Alexander Martinez" />)
    wrapper.find('button').at(1).simulate('click')
    const resultado = wrapper.find('h2').text().trim()
    expect(resultado).toBe('8')
  })


})