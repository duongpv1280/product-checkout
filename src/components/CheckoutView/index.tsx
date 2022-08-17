import './CheckoutView.css'

interface CheckoutProps {
  total?: number,
  handleCheckoutButton: () => void;
}

function CheckoutView(props: CheckoutProps) {
  const { total, handleCheckoutButton } = props;

  return (
    <div className='checkout-view'>
      <button className='checkout-button' onClick={handleCheckoutButton}>CHECKOUT</button>
      <h3 className='total-title'>Total</h3>
      <h3 className='total-price'>{total}</h3>
    </div>
  )
}

export default CheckoutView;