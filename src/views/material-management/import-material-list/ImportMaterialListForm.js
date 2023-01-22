import { CButton, CCol, CInput, CLabel, CRow, CSelect } from '@coreui/react'
import React from 'react';
import NPagination from '../../common/pagination/NPagination';
import DatePicker from '../../common/datepicker/DatePicker';

function ImportMaterialListForm(props) {
  let {purchaseType, purchaseTypeChange,matId,matIdChange,matName,matNameChange,fromDate,fromDateChange,toDate,toDateChange,
      searchClick,listData,totalRow,currentPage,lastPage,editClick,delClick,pagination} = props;
  return (
    <div className='mt-4'>
      <CRow className='align-items-center'>
        <CCol md="2" lg="2 ml-auto">
          <CLabel className='ml-3 pt-2'>Shop Name</CLabel>
        </CCol>
        <CCol md="3" lg="3">
          <CInput type='text' value="default" disabled></CInput>
        </CCol>
        <CCol md="1" lg="1"></CCol>
        <CCol md="2" lg="2">
          <CLabel className='ml-3 pt-2'>Purchase Type</CLabel>
        </CCol>
        <CCol md="3" lg="3 mr-auto">
          <CInput type='text' value={purchaseType} onChange={purchaseTypeChange}></CInput>
        </CCol>
      </CRow>
      <CRow className='align-items-center mt-4'>
        <CCol md="2" lg="2 ml-auto">
          <CLabel className='ml-3 pt-2'>Material Id</CLabel>
        </CCol>
        <CCol md="3" lg="3">
          <CInput type='text' value={matId} onChange={matIdChange}></CInput>
        </CCol>
        <CCol md="1" lg="1"></CCol>
        <CCol md="2" lg="2">
          <CLabel className='ml-3 pt-2'>Material Name</CLabel>
        </CCol>
        <CCol md="3" lg="3 mr-auto">
          <CInput type='text' value={matName} onChange={matNameChange}></CInput>
        </CCol>
      </CRow>
      <CRow className='align-items-center mt-4'>
        <CCol md="2" lg="2 ml-auto">
          <CLabel className='ml-3 pt-2'>From Date</CLabel>
        </CCol>
        <CCol md="3" lg="3">
          <DatePicker value={fromDate} change={fromDateChange}/>
        </CCol>
        <CCol md="1" lg="1"></CCol>
        <CCol md="2" lg="2">
          <CLabel className='ml-3 pt-2'>To Date</CLabel>
        </CCol>
        <CCol md="3" lg="3 mr-auto">
          <DatePicker value={toDate} change={toDateChange}/>
        </CCol>
      </CRow>
      <CRow alignHorizontal="center" className="mt-5">
        <CButton className="form-btn" onClick={searchClick}>
          Search
        </CButton>
      </CRow>
      <CRow className='mt-5'>
        <CCol>
          <p className='mb-0 font-weight-bold text-right'>Total : 15 row(s)</p>
          <div className='overflow'>
            <table className='import-material-table'>
              <thead>
                <tr>
                  <th width={50} className="text-center">No</th>
                  <th width={120} className="text-center">Date</th>
                  <th width={120}>Material ID</th>
                  <th width={160}>Material Name</th>
                  <th width={120}>Price</th>
                  <th width={120} className="text-center">Purchase Type</th>
                  <th width={150} className="text-center">Total Price</th>
                  <th className='text-center' width={200}>Action</th>
                </tr>
              </thead>
              <tbody>
                {listData.map((item,index)=> {
                  return(
                    <tr key={index}>
                    <td width={50} className="text-center">{index+1}</td>
                    <td width={120} className="text-center">{item.date}</td>
                    <td width={120}>{item.material_id}</td>
                    <td width={160}>{item.material_name}</td>
                    <td width={120}>{item.price}</td>
                    <td width={120} className="text-center">{item.purchase_type}</td>
                    <td width={150} className="text-center">{item.total_price}</td>
                    <td width={200} className='text-center'>
                      <label onClick={()=>editClick(item.id)} className='emp-table-btn btn-edit' style={{marginRight:'26px',width:'25%'}}>Edit</label>
                      <label onClick={()=>delClick(item.id)} className='emp-table-btn btn-del' style={{width:'25%'}}>Delete</label>
                    </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CCol>
      </CRow>
      {totalRow > 10 &&
      <NPagination
            activePage = {currentPage}
            pages = {lastPage}
            currentPage = {currentPage}
            totalPage = {lastPage}
            pagination = {pagination}
            />
      }
    </div>
  )
}

export default ImportMaterialListForm
