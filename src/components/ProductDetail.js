import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { productsActions } from '../store/index';




const ProductDetail = () => {
    const dispatch = useDispatch();
    const products = useSelector( state => state.products.products);
    const currentProductDetail = useSelector(state => state.products.currentProduct);  
    // const products = useSelector( state => state.products.currentProduct);
  
    const product = products.filter (product => product.id === currentProductDetail)[0];

    
    const [formInputs, setFormInputs] = useState({nameInput: product.name, descriptionInput: product.description, priceInput: product.price});
    
    console.log('form inputs' + formInputs.nameInput);
    console.log('product' + product.name);
    console.log('inside detail. storeDetail: ' + currentProductDetail + 'cmp detail: ' + product.id);

    // useEffect (
    //     setFormInputs ({
    //         nameInput: product.name,
    //         descriptionInput: product.description,
    //         priceInput: product.price
            
    //     }), [currentProductDetail]
    // )


    const saveDetailHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        const name = e.target[0].value;
        const description = e.target[1].value;
        const price = e.target[2].value;
        dispatch(productsActions.updateProductDetails({id: product.id, name, description, price}))
    }

    const changeInputHandler = (e) => {
            setFormInputs ((state) => {
                return {
                    ... state,
                    [e.target.name]: e.target.value

                };
            })
        
    } 

    return (
        <section>
            <h2>product detail</h2>
            <form onSubmit = {saveDetailHandler}> 
                <label>name: </label>
                <input name = 'name' type = 'text' value = {formInputs.nameInput} onChange = { changeInputHandler }></input>
                <label>description: </label>
                <input name = 'desc' type = 'text' value = {formInputs.descriptionInput} onChange = { changeInputHandler }></input>
                <label>price: </label>
                <input name = 'price' type = 'number' value = {formInputs.priceInput} onChange = { changeInputHandler }></input>
                <button  >SAVE</button>
            </form>
            
        </section>
    )
}

export default ProductDetail;