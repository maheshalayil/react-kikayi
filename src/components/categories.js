import React, { Component, useEffect } from 'react';
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

  // useEffect(()=> {
  //   (async () => {      
  //     await dispatch(loadCategory())
  //   })();
  // }, []);

  const handleClick = async () => {
    await dispatch(loadCategory());
  }

  return (
    <div>
      Categories ( {props.categories.length} )
      <button onClick={handleClick}>load</button>
    </div>
  )
}