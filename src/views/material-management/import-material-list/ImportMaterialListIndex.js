import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import ImportMaterialListForm from "./ImportMaterialListForm";

const ImportMaterialListIndex = () => {
  const [purchaseType,setPurchaseType] = useState(""); // for purchase type
  const [matId, setMatId] = useState(""); // for material id
  const [matName, setMatName] = useState(""); // for material name
  const [fromDate, setFromDate] = useState(null); // for from date
  const [toDate, setToDate] = useState(null); //for to date
  const [listData, setListData] = useState([]); // for import material list table data
  const [totalRow, setTotalRow] = useState(""); // for user list table rows
  const [currentPage, setCurrentPage] = useState(); // for user list table current page
  const [lastPage, setLastPage] = useState(""); // for user list table last page


  useEffect(()=> {
    formLoad();
  },[])

  const formLoad = () => {
    // setLoading(true);
    // let obj = {
    //   method: "post",
    //   url: ApiPath.empList+`?page=${page}`,
    //   params:
    //     {
    //     }
    // };
    // let response = await ApiRequest(obj);
    // setLoading(false);
    // if (response.flag === false) {

    // } else {
    //   if (response.data.status === "OK") {

    let data = [
      {
        'id':'1',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'2',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'3',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'4',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'5',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'6',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'7',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'8',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'9',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      },
      {
        'id':'10',
        'material_name':'fruit salad',
        'material_id':'1000',
        'emp_name':'phyoe',
        'date':'10-4-2020',
        'price':'20000',
        'purchase_type':'4 Pack',
        'total_price':'30000',
        'role':'admin'
      }
    ]
    setListData(data);
    setTotalRow(14);
    setCurrentPage(1);
    setLastPage(2);
    //     setListData(response.data.data.data);
    //     setTotalRow(response.data.data.total);
    //     setCurrentPage(response.data.data.current_page);
    //     setLastPage(response.data.data.last_page);
    //   } else {
    //   }
    // }
  }


  const matIdChange = (e) => {
    setMatId(e.target.value);
  }

  const matNameChange = (e) => {
    setMatName(e.target.value);
  }

  const fromDateChange = (e) => {
    setFromDate(e);
  }

  const toDateChange = (e) => {
    setToDate(e);
    console.log(e)
  }

  const searchClick = () => {
    alert('search');
  }

  // pagination function
  const pagination = (i) => {
    setCurrentPage(i);
    alert(i);
  }

  const editClick = (id) => {
    alert(id);
  }

  const delClick = (id) => {
    alert(id);
  }

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h4 className='mb-0'>Import Material List</h4>
          </CCardHeader>
          <CCardBody>
            <ImportMaterialListForm
            matId = {matId}
            matIdChange = {matIdChange}
            matName = {matName}
            matNameChange = {matNameChange}
            fromDate = {fromDate}
            fromDateChange = {fromDateChange}
            toDate = {toDate}
            toDateChange = {toDateChange}
            listData = {listData}
            totalRow = {totalRow}
            currentPage = {currentPage}
            lastPage = {lastPage}
            searchClick = {searchClick}
            pagination = {pagination}
            editClick = {editClick}
            delClick = {delClick}
            />
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default ImportMaterialListIndex
