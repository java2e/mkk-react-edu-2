import Modal from "../UI/Modal";

import classes from './Cart.module.css';

const Cart =(props) => {

    const totalAmount = 120;

    return(
        <Modal onClose={props.onClose}>
            {items}
            <div className={classes.total}>
                <span>Toplam</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']}>Kapat</button>
                <button className={classes.button}>Siparişi Tamamla</button>
            </div>
        </Modal>

    )


}

export default Cart;