import React, { useState } from 'react';
import {validName, validPhone, validEmail, validAddress, validAppartment, validCity, validZip} from '../../Regex'

const CheckoutForm = ({cart, total, onCheckout}) => {

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState( false );

    const setField = (field, value) => {
        setForm({
            ...form,
            [field] : value
        })
    }

    const validateForm = () => {
        
        const {name, phone, email, address, appartment, city, zipCode} = form;
        const newErrors = {};

        if(!name || name === '') newErrors.name = 'Ingrese su nombre.'
        else if (!validName.test(name)) newErrors.name = 'Nombre inválido.'

        if(!phone || phone === '') newErrors.phone = 'Ingrese un teléfono.'
        else if (!validPhone.test(phone)) newErrors.phone = 'Solo números.'

        if(!email || email === '') newErrors.email = 'Ingrese un email.'
        else if (!validEmail.test(email)) newErrors.email = 'Formato de email inválido.'

        if(!address || address === '') newErrors.address = 'Ingrese una dirección.'
        else if (!validAddress.test(address)) newErrors.address = 'Dirección inválida.'

        if (appartment !== '' && !validAppartment.test(appartment)) newErrors.appartment = 'Piso inválido.'

        if(!city || city === '') newErrors.city = 'Ingrese una ciudad.'
        else if (!validCity.test(city)) newErrors.city = 'Ciudad inválida.'

        if(!zipCode || zipCode === '') newErrors.zipCode = 'Ingrese un CP.'
        else if (!validZip.test(zipCode)) newErrors.zipCode = 'CP inválido.'

        return newErrors;
    }

    const checkoutHandler = (e) => {
        
        e.preventDefault();
        setLoading(true);
        const formErrors = validateForm();

        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            onCheckout(form);
        }

        setLoading(false);
        
    }

    return (
        <>
            <div className="formContainerLeft">

                <h2>Checkout</h2>

                <form onSubmit={(e) => checkoutHandler(e)}>

                    <h3>Datos contacto</h3>

                    <div className="formFieldContainer">
                        <label htmlFor="input-name">Nombre *</label>
                        <p className="errorText">
                            {errors.hasOwnProperty('name') ? errors.name : ''}
                        </p>
                        <input type="text" name="input-name" id="i-name" placeholder="Nombre"
                        onChange={(e) => setField('name', e.target.value)}/>
                    </div>

                    <div className="formFieldContainer">
                        <label htmlFor="input-phone">Teléfono *</label>
                        <p className="errorText">
                            {errors.hasOwnProperty('phone') ? errors.phone : ''}
                        </p>
                        <input type="text" name="input-phone" id="i-phone" placeholder="Teléfono"
                        onChange={(e) => setField('phone', e.target.value)}/>
                    </div>

                    <div className="formFieldContainer">
                        <label htmlFor="input-email">Email *</label>
                        <p className="errorText">
                            {errors.hasOwnProperty('email') ? errors.email : ''}
                        </p>
                        <input type="text" name="input-email" id="i-email" placeholder="Email"
                        onChange={(e) => setField('email', e.target.value)}/>
                    </div>

                    <h3>Datos envio</h3>

                    <div className="formFieldContainer">
                        <label htmlFor="input-address">Dirección *</label>
                        <p className="errorText">
                            {errors.hasOwnProperty('address') ? errors.address : ''}
                        </p>
                        <input type="text" name="input-address" id="i-address" placeholder="Dirección"
                        onChange={(e) => setField('address', e.target.value)}/>
                    </div>

                    <div className="formFieldContainer">
                        <label htmlFor="input-appartment" className="longLabel">Piso / Apartamento</label>
                        <p className="errorText shortError">
                            {errors.hasOwnProperty('appartment') ? errors.appartment : ''}
                        </p>
                        <input type="text" name="input-appartment" id="i-appartment" placeholder="Piso / Apartamento"
                        onChange={(e) => setField('appartment', e.target.value)}/>
                    </div>

                    <div className="formFieldContainer">
                        <label htmlFor="input-city">Ciudad *</label>
                        <p className="errorText">
                            {errors.hasOwnProperty('city') ? errors.city : ''}
                        </p>
                        <input type="text" name="input-city" id="i-city" placeholder="Ciudad"
                        onChange={(e) => setField('city', e.target.value)}/>
                    </div>

                    <div className="formFieldContainer">
                        <label htmlFor="input-zipCode" className="longLabel">Código Postal *</label>
                        <p className="errorText shortError">
                            {errors.hasOwnProperty('zipCode') ? errors.zipCode : ''}
                        </p>
                        <input type="text" name="input-zipCode" id="i-zipCode" placeholder="Código Postal"
                        onChange={(e) => setField('zipCode', e.target.value)}/>
                    </div>

                    <input type="submit" className='checkoutBtn' value='Finalizar compra'></input>
                </form>
            </div>
            <div className="formContainerRight">
                <h2>Detalle</h2>
                <table>
                    <thead>
                        <tr>
                            <th style={{width:'50%'}}>Película</th>
                            <th style={{width:'25%'}}>Cantidad</th>
                            <th style={{width:'25%'}}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(f => <tr key={f.id}>
                                <td>{f.title}</td>
                                <td>x {f.qty}</td>
                                <td>$ {f.price * f.qty}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <h3>Total: ${total}</h3>
            
            </div>

            {
                loading ?
                    <div className='loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                : ''  
            }
            
        </>
    )

}

export default CheckoutForm