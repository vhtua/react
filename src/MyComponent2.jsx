import { useState } from "react";

function MyComponent2() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState("Pick up");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value);
    }

    function handleShipping(event) {
        setShipping(event.target.value);
    }


    return (
        <div>
            <h2>onChange</h2>
            <p>onChange detect the changes of values and using callback in html</p>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>


            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>


            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="mastercard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>


            <form>
                <input type="radio" id="pick-up" name="shipping-method" value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping}/>
                <label htmlFor="pick-up">Pick up</label> <br />
                <input type="radio" id="delivery" name="shipping-method" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>
                <label htmlFor="delivery">Delivery</label>

                <p>Shipping method: {shipping}</p>

            </form>

            
            
        </div>
    );
}

export default MyComponent2;