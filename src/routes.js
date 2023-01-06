import React from 'react';

const ShopRegistrationAndList = React.lazy(() => import('./views/shop-management/shop-registration-and-list/ShopRegistrationAndListIndex'));
const TableAndSeatRegisterIndex = React.lazy(() => import('./views/shop-management/table-and-seat-register/TableAndSeatRegisterIndex'));
const ShopAndMenuTabletRegisterIndex = React.lazy(() => import('./views/shop-management/shop-and-menu-tablet-register/ShopAndMenuTabletRegisterIndex'));
const MenuRegisterIndex = React.lazy(() => import('./views/menu-management/menu-register/MenuRegisterIndex'));
const MenuListIndex = React.lazy(() => import('./views/menu-management/menu-list/MenuListIndex'));
const MaterialRegisterIndex = React.lazy(() => import('./views/material-management/material-register/MaterialRegisterIndex'));
const ImportMaterialRegisterIndex = React.lazy(() => import('./views/material-management/import-material-register/ImportMaterialRegisterIndex'));
const MaterialListIndex = React.lazy(() => import('./views/material-management/material-list/MaterialListIndex'));

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/shop-management', name: 'Shop Management',exact: true },
  { path: '/shop-management/shop-registration-and-list', name: 'Shop Registration And List', component: ShopRegistrationAndList },
  { path: '/shop-management/table-and-seat-register', name: 'Table And Seat Register', component: TableAndSeatRegisterIndex },
  { path: '/shop-management/shop-and-menu-tablet-register', name: 'Shop And Menu Tablet Register', component: ShopAndMenuTabletRegisterIndex  },
  { path: '/menu-management', name: 'Menu Management',exact: true },
  { path: '/menu-management/menu-register', name: 'Menu Register', component: MenuRegisterIndex  },
  { path: '/menu-management/menu-list', name: 'Menu List', component: MenuListIndex  },
  { path: '/material-management', name: 'Material Management',exact: true },
  { path: '/material-management/material-register', name: 'Material Register', component: MaterialRegisterIndex  },
  { path: '/material-management/import-material-register', name: 'Import Material Register', component: ImportMaterialRegisterIndex },
  { path: '/material-management/material-list', name: 'Material List', component: MaterialListIndex },
];

export default routes;
