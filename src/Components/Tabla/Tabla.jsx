import "../Tabla/Tabla.css";
import { Space, Table} from 'antd';

function Tabla(props) {
    const {lista, eliminar, modificar, modificado} = props;

    const columns = [
        {
          title: 'Nombre',
          dataIndex: 'titulo',
          key: 'titulo',
          render: (text) => <p>{text}</p>,
        },
        {
          title: 'Descripcion',
          dataIndex: 'descripcion',
          key: 'descripcion',
        },
        {
          title: 'Edit',
          key: 'edit',
          render: (_, record) => (
            <Space size="middle">
              <button onClick={() => {modificar(record);
              modificado(record)}}> Edit</button>
            </Space>
          ),
        },
        {
          title: 'Delete',
          key: 'delete',
          render: (_, record) => (
            <Space size="middle">
              <button onClick={() => eliminar(record.id)}> Delete</button>
            </Space>
          ),
        },
      ];
    return <div>
        <Table columns={columns} dataSource={lista}/>
    </div>
}

export default Tabla;