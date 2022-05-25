import './productList.css';
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProductList = () => {
const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Produt',
      width: 230,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        )
      },
    },
    { field: 'stock', headerName: 'Stock', width: 230 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]
   return (
     <div className='productList'>
       <DataGrid
         rows={data}
         columns={columns}
         disableSelectionOnClick
         pageSize={8}
         checkboxSelection
       />
     </div>
   )
}

export default ProductList;
