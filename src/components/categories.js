import React, { Component } from 'react';
import { useSelector } from 'react-redux'

export const Categories = () => {
  const categories = useSelector(state => state.categoryState.categories);
  console.log('categories', categories)
  return (
    <div>Categories ( {categories.length} )</div>
  )
}