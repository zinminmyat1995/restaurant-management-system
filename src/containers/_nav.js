export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    className: "dashboard"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Cashier',
    to: '/cashier',
    className: "cashier"
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Employee Management',
    route: '/employee-management',
    className: "employee-management",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee Registration',
        to: '/employee-management/employee-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee List',
        to: '/employee-management/employee-list',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Shop Management',
    route: '/shop-management',
    className: "shop-management",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Shop Registration And List',
        to: '/shop-management/shop-registration-and-list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Shop And Tablet Registration',
        to: '/shop-management/shop-and-menu-tablet-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Shop And Tablet List',
        to: '/shop-management/shop-and-menu-tablet-list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Table And Seat Registration',
        to: '/shop-management/table-and-seat-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Table And Seat List',
        to: '/shop-management/table-and-seat-list',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Material Management',
    route: '/material-management',
    className: "material-management",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Material Registration',
        to: '/material-management/material-register',
      },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Material List',
        to: '/material-management/material-list',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Import Material Registration',
        to: '/material-management/import-material-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Import Material List',
        to: '/material-management/import-material-list',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu Management',
    route: '/menu-management',
    className: "menu-management",
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Menu Registration',
        to: '/menu-management/menu-register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Menu List',
        to: '/menu-management/menu-list',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/logout',
    className: "logout"
  },
]

