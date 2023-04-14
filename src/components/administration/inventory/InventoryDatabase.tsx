import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';
import { Table } from 'react-bootstrap';
import { Product } from '../../../store/types';
import styles from './InventoryDatabase.module.css';

const ProductTable = () => {
  const products = useSelector((state: RootState) => state.product.products);

    return (
        <div className={`${styles.tableWrapper}`}>
            <h2 className='m-3 p-3 text-center'>Controle de Estoque</h2>
            <Table striped bordered hover className={`m-3 p-3 border bg-white border-bottom shadow-sm bg-body-tertiary text-center`}>
                <thead>
                    <tr>
                        <th>Registro</th>
                        <th>Imagem</th>
                        <th>Produto</th>
                        <th>Class</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: Product) => (
                        <tr key={product.id}>
                            <td className="align-middle"><div className="text-center">{product.id}</div></td>
                            <td>
                                <img src={`http://localhost:5000/api/photos/${product.id}/photo`} alt="" className={`${styles.imageTable} shadow p-1 bg-body-tertiary rounded`}/>
                            </td>
                            <td className="align-middle"><div className="text-center">{product.productName}</div></td>
                            <td className="align-middle"><div className="text-center">{product.productClass}</div></td>
                            <td className="align-middle"><div className="text-center">{product.description}</div></td>
                            <td className="align-middle"><div className="text-center">{product.price}</div></td>
                            <td className="align-middle"><div className="text-center">{product.stock.quantity}</div></td>
                            <td className="align-middle">
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
