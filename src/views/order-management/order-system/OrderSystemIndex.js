import React, { useState, useEffect } from "react";
import {
  CButton,
  CImg,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLabel,
  CInput,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import MenuCategory from "./MenuCategory";
import { useHistory } from "react-router-dom";
import MenuType from "./MenuType";
import MenuList from "./MenuList";
import CheckMenuList from "./CheckMenuList";
import { Badge } from "@material-ui/core";
import OrderListCheck from "./OrderListCheck";
import Confirmation from "../../common/Confirmation";
import Loading from "../../common/Loading";
const OrderSystemIndex = () => {
  let history = useHistory();
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false); // for loading
  const [menuCategory, setMenuCategory] = useState([
    { id: 1, menu_category: 1, menu_name: "Thai Food" },
    { id: 2, menu_category: 2, menu_name: "Korean Food" },
    { id: 3, menu_category: 3, menu_name: "Chainese Food" },
    { id: 4, menu_category: 4, menu_name: "Myanmar Food" },
    { id: 5, menu_category: 5, menu_name: "Malasia Food" },
    { id: 6, menu_category: 6, menu_name: "Laos Food" },
    { id: 7, menu_category: 7, menu_name: "Canbodia Food" },
  ]); // for menu category
  const [selectedMenuCategory, setSelectedMenuCategory] = useState(""); // for selected menu category

  const [menuType, setMenuType] = useState([
    { id: 1, menu_type: 1, menu_name: "Fried" },
    { id: 2, menu_type: 2, menu_name: "Soup" },
    { id: 3, menu_type: 3, menu_name: "Curry" },
    { id: 4, menu_type: 4, menu_name: "Drink" },
    { id: 5, menu_type: 5, menu_name: "Steak" },
    { id: 6, menu_type: 6, menu_name: "Fried" },
    { id: 7, menu_type: 7, menu_name: "Soup" },
    { id: 8, menu_type: 8, menu_name: "Curry" },
    { id: 9, menu_type: 9, menu_name: "Drink" },
    { id: 10, menu_type: 10, menu_name: "Steak" },
    { id: 11, menu_type: 11, menu_name: "Fried" },
    { id: 12, menu_type: 12, menu_name: "Soup" },
    { id: 13, menu_type: 13, menu_name: "Curry" },
    { id: 14, menu_type: 14, menu_name: "Drink" },
    { id: 15, menu_type: 15, menu_name: "Steak" },
  ]);
  const [selectedMenuType, setSelectedMenuType] = useState(1); // for selected menu Type
  const [selectedMenuTypeKey, setSelectedMenuTypeKey] = useState(""); // for selected menu type key
  const [confirmationModal, setConfirmationModal] = useState(false); // for confirmation modal show or hide
  const [content, setContent] = useState(""); // for content confirmation message
  const [confirmType, setConfirmType] = useState(""); // for confirmation type
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      menu_name: "ခေါက်ဆွဲကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 1,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 2,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 3,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 2,
      menu_name: "ထမင်းကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 4,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 5,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 6,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 3,
      menu_name: "ကြာဇံကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 7,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 8,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 9,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 4,
      menu_name: "ထိုင်းထမင်းကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 10,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 11,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 12,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 5,
      menu_name: "ကြေးအိုး",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 13,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 14,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 15,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 6,
      menu_name: "ရှမ်းခေါက်ဆွဲ",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 16,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 17,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 18,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 7,
      menu_name: "မာလာရှမ်းကော",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 19,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 20,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 21,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 8,
      menu_name: "ဆီချက်ခေါက်ဆွဲ",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 22,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 23,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 24,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 9,
      menu_name: "ထိုင်းထမင်းကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 25,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 26,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 27,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 10,
      menu_name: "ကြေးအိုး",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 28,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 29,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 30,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 11,
      menu_name: "ရှမ်းခေါက်ဆွဲ",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 31,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 32,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 33,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 12,
      menu_name: "မာလာရှမ်းကော",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 34,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 35,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 36,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 13,
      menu_name: "ဆီချက်ခေါက်ဆွဲ",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 37,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 38,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 39,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 14,
      menu_name: "ခေါက်ဆွဲကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 40,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 41,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 42,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 15,
      menu_name: "ထမင်းကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 43,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 44,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 45,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
    {
      id: 16,
      menu_name: "ကြာဇံကြော်",
      menu_category: "1",
      menu_type: "1",
      meat_data: [
        {
          id: 1,
          meat_type: "1",
          name: "ကြက်",
          menu_id: 46,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 2,
          meat_type: "2",
          name: "ဝက်",
          menu_id: 47,
          check: false,
          count: 0,
          old_count: 0,
        },
        {
          id: 3,
          meat_type: "3",
          name: "ပင်လယ်စာ",
          menu_id: 48,
          check: false,
          count: 0,
          old_count: 0,
        },
      ],
      price: "1500",
    },
  ]); // for menu list data
  const [selectedMenuListData, setSelectedMenuListData] = useState([]); // for selected menu list data
  const [checkListModalShow, setCheckListModalShow] = useState(false); // for check list modal show or hide
  const [notiCount, setNotiCount] = useState(0); // Add to cart count
  const [orderList, setOrderList] = useState([]); // for menu order list
  const [totalPrice, setTotalPrice] = useState(0); // for tatal price

  /** Form Load */
  useEffect(() => {
    (async () => {})();
  }, []);

  // let menu category click function
  let menuCategoryClick = (id) => {
    setSelectedMenuCategory(id);
    setPage(2);
    setSelectedMenuTypeKey(0);
  };

  // for menu list click function
  let menuListClick = (e) => {
    setSelectedMenuListData([e]);
    setCheckListModalShow(true);
  };

  // for check list checkbox change function
  let checkMenuCheckboxClick = (e) => {
    let id = e.target.value;
    let flg = "";
    let data = selectedMenuListData.map((main) => {
      if (main.meat_data != undefined && main.meat_data.length > 0) {
        main.meat_data.map((sec) => {
          if (sec.meat_type == id) {
            flg = sec.check;
            if (!flg === true) {
              sec.count = 1;
            } else {
              sec.count = 0;
            }
            sec.check = !flg;
            return sec;
          }
          return sec;
        });
        return main;
      }
      return main;
    });
    setSelectedMenuListData(data);
  };

  // for plus count button function
  let plusClick = (id) => {
    let data = selectedMenuListData.map((main) => {
      if (main.meat_data != undefined && main.meat_data.length > 0) {
        main.meat_data.map((sec) => {
          if (sec.meat_type == id) {
            sec.count = sec.count + 1;
            return sec;
          }
          return sec;
        });
        return main;
      }
      return main;
    });
    setSelectedMenuListData(data);
  };

  // for minus count button function
  let minusClick = (id) => {
    let num;
    let data = selectedMenuListData.map((main) => {
      if (main.meat_data != undefined && main.meat_data.length > 0) {
        main.meat_data.map((sec) => {
          if (sec.meat_type == id) {
            num = sec.count - 1;
            sec.count = num;
            if (num == 0) {
              sec.check = false;
            }
            return sec;
          }
          return sec;
        });
        return main;
      }
      return main;
    });
    setSelectedMenuListData(data);
  };

  // for add to card btn function
  let addToCartBtn = () => {
    let count = notiCount;
    let have;let total=0;
    let order_data = orderList;
    let data = selectedMenuListData.map((main) => {
      if (main.meat_data != undefined && main.meat_data.length > 0) {
        main.meat_data.map((sec) => {
          if (sec.count > 0 && sec.count != sec.old_count) {
            if (sec.count > sec.old_count) {
              count = count + (sec.count - sec.old_count);
              have = userExists(sec.menu_id);
              if (have === true) {
                order_data = order_data.map((data) => {
                  if (data.menu_id == sec.menu_id) {
                    data.count = data.count + (sec.count - sec.old_count);
                    data.total_price = data.count * data.price;
                    return data;
                  }
                  return data;
                });
              } else {
                order_data.push({
                  id: orderList.length + 1,
                  menu_id: sec.menu_id,
                  menu_category: main.menu_category,
                  menu_name: main.menu_name,
                  menu_type: main.menu_type,
                  meat_type: sec.meat_type,
                  name: sec.name,
                  count: sec.count,
                  price: main.price,
                  total_price: sec.count * main.price,
                });
              }
            } else {
              count = count - (sec.old_count - sec.count);
              have = userExists(sec.menu_id);
              if (have === true) {
                order_data = order_data.map((data) => {
                  if (data.menu_id == sec.menu_id) {
                    data.count = data.count - (sec.old_count - sec.count);
                    data.total_price = data.count * data.price;
                    return data;
                  }
                  return data;
                });
              }
              // else {
              //   order_data.push({
              //     id: orderList.length + 1,
              //     menu_id: sec.menu_id,
              //     menu_category: main.menu_category,
              //     menu_name: main.menu_name,
              //     menu_type: main.menu_type,
              //     meat_type: sec.meat_type,
              //     name: sec.name,
              //     count: sec.count,
              //     price: main.price,
              //     total_price: main.price
              //   })
              // }
            }
            sec.old_count = sec.count;
            return sec;
          } else if (sec.count < 1) {
            count = count - sec.old_count;
            sec.old_count = 0;
            sec.count = 0;
            have = userExists(sec.menu_id);
            if (have === true) {
              order_data = order_data.filter(
                (data) => data.menu_id != sec.menu_id
              );
            }
            return sec;
          }

          return sec;
        });
        return main;
      }
      return main;
    });
    order_data.forEach(data=>{
      total = total + data.total_price;
    })
    setTotalPrice(total);
    setOrderList(order_data);
    setSelectedMenuListData(data);
    setNotiCount(count);
    setCheckListModalShow(false);
  };

  // to check have value from orderList data
  let userExists = (id) => {
    return orderList.some(function (el) {
      return el.menu_id === id;
    });
  };

  // for logout button function
  let logoutBtn = () => {
    localStorage.clear();
    history.push("/login");
  };
  console.log("menu list data", selectedMenuListData);
  console.log("order list", orderList);

  // for note button click function
  let noteClick = () => {
    setPage(3);
  };

  // for confirm button function
  let confirmBtn = () => {
    setConfirmationModal(true);
    setContent("Are you sure want to confirm?");
    setConfirmType("save");
  };

  // for save ok button function
  let saveOK = () => {
    setConfirmationModal(false);
    setLoading(true);
  };

  // for order list minus button function
  let orderListMinusBtn = (e) => {
    let menu_id = e['menu_id'],menu_name = e['menu_name'];
    let data = orderList.map((main) => {
      if (main.id == e['id']) {
        main.count = main.count - 1;
        main.total_price = main.count * main.price;
        setTotalPrice(totalPrice - main.price);
        setNotiCount(notiCount - 1)
        return main;
      }
      return main;
    });
    let Data = menuList.map(data=>{
      if(data.menu_name == menu_name){
        data.meat_data.map(sec=>{
          if(sec.menu_id == menu_id){
            if(sec.count == 1 ){
              sec.check= false;
            }
            sec.count= sec.count - 1;
            sec.old_count= sec.old_count - 1;
            return sec;
          }
          return sec;
        })
        return data;
      }
      return data;
    })
    setMenuList(Data)
    setOrderList(data);
  };
  console.log("PRICE",totalPrice)

  // for order list plus button function
  let orderListPlusBtn = (id) => {
    let data = orderList.map((main) => {
      if (main.id == id) {
        main.count = main.count + 1;
        main.total_price = main.count * main.price;
        setTotalPrice(totalPrice + parseInt(main.price));
        setNotiCount(notiCount + 1)
        return main;
      }
      return main;
    });
    setOrderList(data);
  };

  // for order list remove button function
  let orderListRemoveBtn = (id) => {
    let length = orderList.length;
    orderList.forEach((data) => {
      if (data.id == id) {
        setTotalPrice(totalPrice - data.total_price);
        setNotiCount(notiCount - data.count)
      }
    });
    let data = orderList.filter((main) => main.id != id);
    setOrderList(data);
    if(length == 1 ){ setPage(2); setSelectedMenuType(1);setSelectedMenuTypeKey(0)}
  };

  return (
    <>
      <Loading start={loading} />
      <div className="nav-main-bar">
        <CCardHeader
          style={{
            background: "#455261",
            position: "fixed",
            top: "0",
            width: "100%",
          }}
        >
          <CRow>
            <CCol>
              <CImg
                className="btn-hover"
                src={"/image/profile.svg"}
                width="33px"
              />
              <CLabel style={{ color: "white" }}>SSK10001</CLabel>
            </CCol>
            <CCol>
              <h4 style={{ color: "white", fontFamily: "cursive" }}>
                Shwe Kant Kaw
              </h4>
            </CCol>
            <CCol>
              <CRow alignHorizontal="end">
                <CImg
                  className="btn-hover"
                  src={"/image/logout-white.svg"}
                  width="33px"
                  onClick={logoutBtn}
                  style={{ marginRight: "13px" }}
                />
              </CRow>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardHeader style={{ position: "fixed", top: "59px", width: "100%" }}>
          <CRow className="">
            <CCol sm="5">
              <CInput type="text" />
            </CCol>
            <CCol sm="1">
              <CImg
                className="btn-hover"
                src={"/image/search.svg"}
                width="33px"
                style={{ marginLeft: "-17px" }}
              />
            </CCol>
            <CCol sm="3"></CCol>
            <CCol sm="1">
              {page > 1 && (
                <CImg
                  className=""
                  src={"/image/return.svg"}
                  width="33px"
                  onClick={() => setPage(page - 1)}
                />
              )}
              {page < 2 && (
                <CImg
                  className=""
                  src={"/image/return_disable.svg"}
                  width="33px"
                />
              )}
            </CCol>
            <CCol sm="1">
              <Badge badgeContent={notiCount} color="secondary">
                <CImg
                  className=""
                  src={"/image/note.svg"}
                  width="33px"
                  onClick={noteClick}
                />
              </Badge>
            </CCol>
            <CCol sm="1">
              <CImg
                className="btn-hover"
                src={"/image/option.svg"}
                width="33px"
              />
            </CCol>
          </CRow>
        </CCardHeader>
        {page == 1 && (
          <CCardBody className="order-system-card-body">
            <MenuCategory
              data={menuCategory}
              menuCategoryClick={menuCategoryClick}
            />
          </CCardBody>
        )}
        {page == 2 && (
          <>
            <MenuType
              data={menuType}
              setValue={(val) => {
                setSelectedMenuTypeKey(val);
                setSelectedMenuType(val + 1);
              }}
              value={selectedMenuTypeKey}
            />
          </>
        )}
      </div>

      {page == 2 && (
        <div className="nav-main-body-menu-type">
          <MenuList data={menuList} menuListClick={menuListClick} />
        </div>
      )}
      <CheckMenuList
        data={selectedMenuListData}
        show={checkListModalShow}
        checkMenuCheckboxClick={checkMenuCheckboxClick}
        plusClick={plusClick}
        minusClick={minusClick}
        closeBtn={() => setCheckListModalShow(false)}
        addToCartBtn={addToCartBtn}
      />
      {page == 3 && (
        <div className="nav-main-body-order-system">
          <OrderListCheck
            data={orderList}
            totalPrice={totalPrice}
            confirmBtn={confirmBtn}
            orderListMinusBtn={orderListMinusBtn}
            orderListPlusBtn={orderListPlusBtn}
            orderListRemoveBtn={orderListRemoveBtn}
          />
        </div>
      )}

      <Confirmation
        show={confirmationModal}
        content={content}
        type={confirmType}
        saveOK={saveOK}
        okButton="OK"
        cancel={() => setConfirmationModal(false)}
        cancelButton="Cancel"
      />
    </>
  );
};

export default OrderSystemIndex;
