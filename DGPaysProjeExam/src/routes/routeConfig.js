import Dashboard from "../views/dashboard/Dashboard";
import AddCustomer from "../views/customer/AddCustomer";
import Favorites from "../views/customer/Favorites";
import CustomerList from "../views/customer/CustomerList";
import UpdateCustomer from "../views/customer/UpdateCustomer";
import CustomerDetail from "../views/customer/CustomerDetail";
export const routeConfig = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/customers',
        element: <CustomerList />
    },
    {
        path: '/addcustomer',
        element: <AddCustomer />
    },
    {
        path: '/customer/update/:id',
        element: <UpdateCustomer />
    },
    {
        path: '/customer/detail/:id',
        element: <CustomerDetail />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
]