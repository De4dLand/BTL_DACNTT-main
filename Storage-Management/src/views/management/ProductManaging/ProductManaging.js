import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFormCheck,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import axios from 'axios';
import ProducTypeForm from './ProductTypeForm';
import fetchData from '../../../lib/fetchdata';
const ProductManaging = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData('tbProduct');
    });
    const handleDelete = (tableName, id) => {
        axios.delete(`http://localhost:8081/delete/${tableName}/${id}`)
            .then(() => {
                fetchData(tableName); // Refresh data after deletion
            })
            .catch((err) => console.error(err));
    };
    const fetchData = (tableName) => {
        fetch(`http://localhost:8081/${tableName}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    };
    return (<>
        <CRow>
            <ProducTypeForm></ProducTypeForm>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Bảng Dữ Liệu</strong> <small>
                        </small>
                    </CCardHeader>
                    <CCardBody>
                        <CTable>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Tên Sản Phẩm</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Mô Tả</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Đơn Giá</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Hình Ảnh</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Loại Sản Phẩm</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Chức Năng</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {data.map((d, i) =>
                                (
                                    <CTableRow>
                                        <CTableHeaderCell scope="row" key={i}>{i + 1}</CTableHeaderCell>
                                        <CTableDataCell>{d.Product_Name}</CTableDataCell>
                                        <CTableDataCell>{d.Product_Description}</CTableDataCell>
                                        <CTableDataCell>{d.Product_Price}</CTableDataCell>
                                        <CTableDataCell>
                                            <img src={d.Product_Image} />
                                        </CTableDataCell>
                                        <CTableDataCell></CTableDataCell>
                                        <CTableDataCell>
                                            {/* <CButton color="danger" onClick={() => handleDelete("tbProduct", d.Product_ID)}>Xóa</CButton> */}
                                            {/* <CButton color="danger" onClick={() => handleUpdate("tbProduct", d.Product_ID)}>Sửa</CButton> */}
                                        </CTableDataCell>
                                    </CTableRow>
                                )
                                )}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow >
    </>
    )
}

export default ProductManaging;
