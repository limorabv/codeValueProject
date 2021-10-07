import { productsActions } from '../store/index';
import { useDispatch } from 'react-redux';




const ProductPreview = (props) => {
    const dispatch = useDispatch();
    

    const deleteCilckedHandler = (e) => {
        e.stopPropagation();
        props.deleteItem(props.product.id)
    }

    const productClickedHandler = () => {
        props.changeCurrent(props.product.id);
    }
    
    return (<li key = {props.product.id} className = {props.isCurrent ? 'marked' : '' } onClick = { productClickedHandler }>
                <div>
                    <p>{props.product.name}</p>
                    <p>{props.product.description}</p>
                    <button onClick = { deleteCilckedHandler }>Delete</button>
                </div>
            </li>)
}

export default ProductPreview;
