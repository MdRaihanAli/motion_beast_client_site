import {
    PaymentElement,
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';





const CheckoutForm = ({ handleClose, bookingInfo, handelPay }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const navigate = useNavigate()



    useEffect(() => {
        if (bookingInfo?.price > 0) {
            fetch(`${import.meta.env.VITE_link}/create-payment-intent`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ price: bookingInfo.price })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setClientSecret(data.clientSecret)
                })
                
        }
    }, [bookingInfo])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // setProcessing(true)

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            })
        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
        }

        if (paymentIntent.status === 'succeeded') {
            toast('Peament Successfull')
            handelPay(bookingInfo)
            navigate('/dashboard/myEnrolledClass')
            setCardError('')
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardError && <p className='text-danger'>{cardError}</p>}

            <button type="submit" className='btn btn-success mt-4' disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};


export default CheckoutForm