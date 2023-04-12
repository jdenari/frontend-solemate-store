import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { Table } from 'react-bootstrap';
import { Product } from '../../../store/types';
import styles from './InventoryDatabase.module.css';

const ProductTable = () => {
  const products = useSelector((state: RootState) => state.product.products);

    return (
        <div>
            <h2 className='m-3 p-3 text-center'>Controle de Estoque</h2>
            <Table striped bordered hover className='m-3 p-3 border bg-white border-bottom shadow-sm bg-body-tertiary text-center'>
                <thead>
                    <tr>
                        <th>Registro</th>
                        <th>Product Name</th>
                        <th>Product Class</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: Product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.productClass}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock.quantity}</td>
                            <td>
                                <button className={`${styles.buttonQuantity} btn btn-sm btn-outline-success me-2`}>+</button>
                                <button className={`${styles.buttonQuantity} btn btn-sm btn-outline-danger me-2`}>-</button>
                                <button className={`${styles.buttonQuantity} btn btn-sm btn-outline-danger`}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;
