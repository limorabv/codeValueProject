import { useSelector, useDispatch } from 'react-redux';
import ProductPreview from './ProductPreview';
import { productsActions } from '../store/index';



const ProductsList = () => {
    const products = useSelector( state => state.products.products);
    const currentProductDetailId = useSelector(state => state.products.currentProduct);
    const dispatch = useDispatch(); 


    const deleteClickedHandler = (productId) => {
        dispatch (productsActions.deleteProduct(productId));
    }

    const productClickedHandler = (newId) => {
        dispatch (productsActions.updateCurrentProduct(newId))
        console.log(currentProductDetailId);
    }

    return (
        <section>
            <h1>Products</h1>
            <ul>
                {products.map ( product => 
                            <ProductPreview changeCurrent = {productClickedHandler} isCurrent = {currentProductDetailId === product.id} deleteItem = { deleteClickedHandler } product = {product}/>
                            )}
            </ul>
        </section>
    )
}

export default ProductsList;
