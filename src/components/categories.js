import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { loadCategory } from '../actions/category';

export const Categories = () => {
  const dispatch = useDispatch();
  const props = useSelector(state => {
    return {
      categories: state.categoryState.categories
    }  
  });

  console.log('categories', props.categories);
  //dispatch(loadCategory());
  return (
    <div>Categories ( {props.categories.length} )</div>
  )
}