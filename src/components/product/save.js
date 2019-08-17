import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useForm from "react-hook-form";
import * as Actions from "../../actions/";

export const SaveProductComponent = props => {
  const categories = useSelector(state => state.categoryState.categories);
  const productData = useSelector(state => state.productState.product);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    (async () => {
      if(categories.length === 0)
        await dispatch(Actions.loadCategory());
    })();
  }, []);

  const onSubmit = async data => {
    data.id = productData.id;
    await dispatch(Actions.saveProduct(data));
    props.history.push("/products");
  };

  return (
    <section id="content">
      <div className="row">
        <div className="col s12">
          <h5 className="header">
            {productData.id ? "Edit Product" : "Add Product"}
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
                      defaultValue={productData.name}
                      ref={register({ required: true })}
                      placeholder="Please enter product name"
                    />
                    <label htmlFor="name" className="active">
                      Name{" "}
                      <span className="red-text">
                        {errors.name && "( Product name is required. )"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <label htmlFor="categoryId">Category <span className="red-text">
                        {errors.categoryId && "( Product category is required. )"}
                      </span></label>
                    <select
                      className="browser-default"
                      name="categoryId"
                      defaultValue={productData.categoryId}
                      ref={register({ required: true })}
                    >
                      <option value="" selected>
                        select your category
                      </option>
                      {categories.map(x => {
                        return (
                        <option value={x.id}>{x.name}</option>
                        )
                      })}
                    </select>
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
                    <Link
                      to="/products"
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

export const SaveProduct = withRouter(SaveProductComponent);
