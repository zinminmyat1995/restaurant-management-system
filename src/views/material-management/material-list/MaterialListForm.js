import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CInput,
    CSelect
} from '@coreui/react'

const MaterialListForm = (props)=>{
    let {
        handleChangeMaterialName,
        materialName,
        selectPurchaseType,
        selectPurchaseValue,
        selectPurChaseOnChange
    } = props;
    return(
        <>
            <CCard className="card-body">
                <CCardHeader>
                    <h5>Material List</h5>
                </CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol lg="2">
                            <CLabel>
                                Material Name
                            </CLabel>
                        </CCol>
                        <CCol lg="4">
                        <CInput
                            autoFocus="focus"
                            placeholder="Enter Material Name"
                            type="text"
                            value={materialName}
                            onChange={(e) => handleChangeMaterialName(e)}
                        />
                        </CCol>
                        <CCol lg="2">
                            <CLabel>
                                Purchase Type
                            </CLabel>
                        </CCol>
                        <CCol lg="4">
                            <CSelect
                                value={selectPurchaseValue}
                                onChange={selectPurChaseOnChange}
                            >
                            <option value="">---Select Purchase Type---</option>
                                {selectPurchaseType.map((data, index) => {
                                return (
                                    <option key={index} id={data.purchase_type} value={data.purchase_type}>
                                    {data.name}
                                    </option>
                                );
                                })}
                            </CSelect>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            {/* {mainTable.length > 0 && ( */}
            <CCard className="card-body">
                <CCardBody>
                <div className="list-bg">
                <div className="list-heading mr-3">
                    <h5 className="font-weight-bold responsive-list-heading-font">
                    {/* <CImg
                        className="list-img"
                        src="/avatars/list.png"
                        width={20}
                        height={20}
                    ></CImg> */}
                    Material List Table
                    </h5>
                    <p className="font-weight-bold">
                    {/* <span className="hideRow">Total Row:</span> {total} row(s) */}
                    </p>
                </div>
                <div className="overflow-style">
                    <table className="list-table">
                    <thead className="text-center">
                        <tr>
                        <th style={{ width: 160 }}>No</th>
                        <th style={{ width: 160 }}>Material ID</th>
                        <th style={{ width: 160 }}>Material Name</th>
                        <th style={{ width: 160 }}>Purchase Type</th>
                        <th style={{ width: 480 }} colSpan="2">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {/* {mainTable.length > 0 &&
                            mainTable.map((data, index) => { */}
                            {/* return ( */}
                            <tr>
                                {/* <td style={{ width: 160 }}>{index}</td>
                                <td style={{ width: 160 }}>{material_id} </td>
                                <td style={{ width: 160 }}>{material_name}</td>
                                <td style={{ width: 160 }}>{purchase_type}</td>
                                <td style={{ width: 120 }}>
                                    Edit
                                </td>
                                <td style={{ width: 120 }}>
                                    Delete
                                </td> */}
                                <td style={{ width: 160 }}>1</td>
                                <td style={{ width: 160 }}>10001</td>
                                <td style={{ width: 160 }}>Chicken</td>
                                <td style={{ width: 160 }}>3</td>
                                <td style={{ width: 120 }}>
                                    Edit
                                </td>
                                <td style={{ width: 120 }}>
                                    Delete
                                </td>
                            </tr>
                            {/* ); */}
                        {/* })} */}
                    </tbody>
                    </table>
                </div>
                {/* {total > 20 && (
                    <CRow alignHorizontal="center" className="mt-3">
                    <CPagination
                        activePage={currentPage}
                        pages={lastPage}
                        dots={false}
                        arrows={false}
                        align="center"
                        firstButton="First page"
                        lastButton="Last page"
                        onActivePageChange={(i) => setActivePage(i)}
                    ></CPagination>
                    </CRow>
                )} */}
                </div>
            </CCardBody>
            </CCard>
          {/* )} */}
        </>
    )
}

export default MaterialListForm;