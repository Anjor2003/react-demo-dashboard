import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import {productData  } from '../../dummyData.js'
import { Publish } from '@mui/icons-material'

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to={'/newProduct'}>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={productData}
            dataKey='Sales'
            title={'Sales Performance'}
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>3123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productform'>
          <div className='productformLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple Airpods' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productformRight'>
            <div className='productUpload'>
              <img
                src='https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=500&dpr=2'
                alt=''
                className='productUploadImg'
              />
              <label for="file">
                 <Publish className='file'  />
              </label>
              <input type="file" id='file' style={{display: "none"}} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
