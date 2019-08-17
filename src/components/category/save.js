import React, { useState } from "react";
import { useSelector } from "react-redux";

import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useForm from 'react-hook-form';
import * as Actions from "../../actions/";

export const SaveCategoryComponent = props => {
  let categoryData = useSelector(state => state.categoryState.category);
  console.log('category data from state', categoryData);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    data.id = categoryData.id
    await dispatch(Actions.saveCategory(data));
    props.history.push('/categories');
  };

  return (
    <section id="content">
      <div className="row">
        <div className="col s12">
          <h5 className="header">
            {categoryData.id ? "Edit Category" : "Add Category"}
          </h5>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col s12 m12 l6">
          <div className="card-panel">
            <div className="row">
              <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="name"
                      type="text"
                      defaultValue={categoryData.name}
                      ref={register({ required: true})}
                      placeholder="Please enter category name"
                    />
                    <label htmlFor="name" className="active">
                      Name <span className="right red-text">{errors.name && 'Category name is required.'}</span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">                  
                    <button
                      className="btn waves-effect waves-light mr-3"
                      type="submit"
                      name="action"
                    >
                      Save
                      <i className="material-icons left">save</i>
                    </button>
                    <Link to="/categories"
                      className="btn waves-effect waves-light cyan"
                    >
                      Cancel
                      <i className="material-icons left">cancel</i>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SaveCategory = withRouter(SaveCategoryComponent);
