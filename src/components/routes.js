import React from 'react';
import { Categories, SaveCategory, Products, SaveProduct, Vendors, SaveVendor } from './'

export const routes = [
    { path: '/',
      exact: true,
      main: () => <p>Home</p>
    },
    { path: '/categories',
      main: () => <Categories />
    },
    { path: '/category/save/:id?',
      main: () => <SaveCategory />
    },
    { path: '/products',
      main: () => <Products />
    },
    { path: '/product/save/:id?',
      main: () => <SaveProduct />
    },
    { path: '/vendors',
      main: () => <Vendors />
    },
    { path: '/vendor/save/:id?',
      main: () => <SaveVendor />
    }
  ]