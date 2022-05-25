import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserList = () => {
  const [data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 230,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userlistDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
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

export default UserList
