import React from 'react';

const EmployeeRegistration = React.lazy(() => import('./views/employee-management/employee-registration/EmployeeRegistrationIndex'));
const EmployeeList = React.lazy(() => import('./views/employee-management/employee-list/EmployeeListIndex'));
const ShopRegistrationAndList = React.lazy(() => import('./views/shop-management/shop-registration-and-list/ShopRegistrationAndListIndex'));
const TableAndSeatRegisterIndex = React.lazy(() => import('./views/shop-management/table-and-seat-register/TableAndSeatRegisterIndex'));
const ShopAndMenuTabletRegisterIndex = React.lazy(() => import('./views/shop-management/shop-and-menu-tablet-register/ShopAndMenuTabletRegisterIndex'));
const ShopAndMenuTabletListIndex = React.lazy(() => import('./views/shop-management/shop-and-menu-tablet-list/ShopAndMenuTabletListIndex'));
const MenuRegisterIndex = React.lazy(() => import('./views/menu-management/menu-register/MenuRegisterIndex'));
const MenuListIndex = React.lazy(() => import('./views/menu-management/menu-list/MenuListIndex'));
const MaterialRegisterIndex = React.lazy(() => import('./views/material-management/material-register/MaterialRegisterIndex'));
const ImportMaterialRegisterIndex = React.lazy(() => import('./views/material-management/import-material-register/ImportMaterialRegisterIndex'));
const ImportMaterialList = React.lazy(() => import('./views/material-management/import-material-list/ImportMaterialListIndex'));
const MaterialListIndex = React.lazy(() => import('./views/material-management/material-list/MaterialListIndex'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Cashier = React.lazy(() => import('./views/cashier/CashierIndex'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/cashier', name: 'Cashier', component: Cashier },
  { path: '/employee-management', name: 'Employee Management',exact: true },
  { path: '/employee-management/employee-register', name: 'Employee Registration', component: EmployeeRegistration },
  { path: '/employee-management/employee-list', name: 'Employee List', component: EmployeeList },
  { path: '/shop-management', name: 'Shop Management',exact: true },
  { path: '/shop-management/shop-registration-and-list', name: 'Shop Registration And List', component: ShopRegistrationAndList },
  { path: '/shop-management/table-and-seat-register', name: 'Table And Seat Register', component: TableAndSeatRegisterIndex },
  { path: '/shop-management/shop-and-menu-tablet-register', name: 'Shop And Menu Tablet Register', component: ShopAndMenuTabletRegisterIndex  },
  { path: '/shop-management/shop-and-menu-tablet-list', name: 'Shop And Menu Tablet List', component: ShopAndMenuTabletListIndex  },
  { path: '/menu-management', name: 'Menu Management',exact: true },
  { path: '/menu-management/menu-register', name: 'Menu Register', component: MenuRegisterIndex  },
  { path: '/menu-management/menu-list', name: 'Menu List', component: MenuListIndex  },
  { path: '/material-management', name: 'Material Management',exact: true },
  { path: '/material-management/material-register', name: 'Material Register', component: MaterialRegisterIndex  },
  { path: '/material-management/import-material-register', name: 'Import Material Register', component: ImportMaterialRegisterIndex },
  { path: '/material-management/import-material-list', name: 'Import Material List', component: ImportMaterialList },
  { path: '/material-management/material-list', name: 'Material List', component: MaterialListIndex },
];

export default routes;
