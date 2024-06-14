// src/components/ProductTypeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { CCol, CCard, CCardHeader, CCardBody, CInputGroup, CInputGroupText, CFormInput, CButton } from '@coreui/react';
import fetchData from '../../../lib/fetchdata';
const ProducTypeForm = ({ fetchData }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/tbProduct/add', {
            Product_Name: productName,
            Product_Description: description,
            Product_Price: productPrice,
            Product_Image: productImage,
        })
            .then(() => {
                fetchData("tbProduct"); // Refresh data after submission
                setProductName('');
                setDescription('');
                setProductPrice('');
                setProductImage('');
            })
            .catch((err) => console.error(err));
    };

    return (
        <CCol xs={12}>
            <CCard className="mb-4">
                <CCardHeader>
                    <strong>Quản Lý Sản Phẩm</strong> <small></small>
                </CCardHeader>
                <CCardBody>
                    <form onSubmit={handleSubmit}>
                        <CCol>
                            <CInputGroup>
                                <CInputGroupText id="basic-addon1">Tên Sản Phẩm</CInputGroupText>
                                <CFormInput
                                    placeholder="Tên Sản Phẩm"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => setProductName(e.target.value)}
                                    required
                                />
                            </CInputGroup>
                            <CInputGroup>
                                <CInputGroupText id="basic-addon1">Mô tả</CInputGroupText>
                                <CFormInput
                                    placeholder="Mô tả của Sản Phẩm"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    required
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </CInputGroup>
                            <CInputGroup>
                                <CInputGroupText id="basic-addon1">Đơn Giá</CInputGroupText>
                                <CFormInput
                                    placeholder="Mô tả của Sản Phẩm"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    required
                                    onChange={(e) => setProductPrice(e.target.value)}
                                />
                            </CInputGroup>
                            <CInputGroup>
                                <CInputGroupText id="basic-addon1">Hình Ảnh Sản Phẩm</CInputGroupText>
                                <CFormInput
                                    placeholder="Mô tả của Sản Phẩm"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    required
                                    onChange={(e) => setProductImage(e.target.value)}
                                />
                            </CInputGroup>
                        </CCol>
                        <CButton color={'primary'} variant="outline" type="submit">
                            Nhập Dữ Liệu
                        </CButton>
                    </form>
                </CCardBody>
            </CCard>
        </CCol >
    );
};

export default ProducTypeForm;
