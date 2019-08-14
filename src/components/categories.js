import React, { Component } from 'react';
import { useSelector } from 'react-redux'

export const Categories = () => {
  
  const props = useSelector(state => {
    return {
      categories: state.categoryState.categories
    }  
  });

  console.log('categories', props.categories)
  return (
    <div>Categories ( {props.categories.length} )</div>
  )
}