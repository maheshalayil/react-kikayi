import React from 'react';
import { Categories, SaveCategory } from './'
export const routes = [
    { path: '/',
      exact: true,
      main: () => <p>Home</p>
    },
    { path: '/categories',
      main: () => <Categories />
    },
    { path: '/categories/save',
      main: () => <SaveCategory />
    }
  ]