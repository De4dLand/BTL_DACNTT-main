// src/components/ProductTypeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { CCol, CCard, CCardHeader, CCardBody, CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/react';

const CategoryTypeForm = ({ fetchData }) => {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/tbCategory/add', {
            name: categoryName,
            description: description,
        })
            .then(() => {
                fetchData(); // Refresh data after submission
                setCategoryName('');
                setDescription('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardHeader>
                    <strong>Quản Lý Loại Sản Phẩm</strong> <small></small>
                </CCardHeader>
                <CCardBody>
                    <form onSubmit={handleSubmit}>
                        <CInputGroup className="mb-3">
                            <CInputGroupText id="basic-addon1">Tên Loại Sản Phẩm</CInputGroupText>
                            <CFormInput
                                placeholder="Tên Loại Sản Phẩm"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setCategoryName(e.target.value)}
                                required
                            />
                            <CInputGroupText id="basic-addon1">Mô tả</CInputGroupText>
                            <CFormInput
                                placeholder="Mô tả của Loại Sản Phẩm"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </CInputGroup>
                        <CButton color={'primary'} variant="outline" type="submit">
                            Nhập Dữ Liệu
                        </CButton>
                    </form>
                </CCardBody>
            </CCard>
        </CCol>
    );
};

export default CategoryTypeForm;
