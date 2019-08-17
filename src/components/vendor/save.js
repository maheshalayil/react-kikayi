import React from "react";
import { useSelector } from "react-redux";

import { withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useForm from "react-hook-form";
import * as Actions from "../../actions";

export const SaveVendorComponent = props => {
  const vendorData = useSelector(state => state.vendorState.vendor);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    data.id = vendorData.id;
    await dispatch(Actions.savevendor(data));
    props.history.push("/vendors");
  };

  return (
    <section id="content">
      <div className="row">
        <div className="col s12">
          <h5 className="header">
            {vendorData.id ? "Edit vendor" : "Add vendor"}
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
                      name="firstName"
                      type="text"
                      defaultValue={vendorData.firstName}
                      ref={register({ required: true})}
                      placeholder="Please enter first name"
                    />
                    <label htmlFor="firstName" className="active">
                      First Name{" "}
                      <span className="red-text">
                        {errors.firstName && "( First name is required. )"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="lastName"
                      type="text"
                      defaultValue={vendorData.lastName}
                      ref={register({ required: true })}
                      placeholder="Please enter last name"
                    />
                    <label htmlFor="lastName" className="active">
                      Last Name{" "}
                      <span className="red-text">
                        {errors.lastName && "( Last name is required. )"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="phone"
                      type="text"
                      defaultValue={vendorData.phone}
                      ref={register({ required: true })}
                      placeholder="Please enter phone"
                    />
                    <label htmlFor="phone" className="active">
                      Phone{" "}
                      <span className="red-text">
                        {errors.phone && "( Phone is required. )"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="company"
                      type="text"
                      defaultValue={vendorData.company}
                      ref={register()}
                      placeholder="Please enter vendor company"
                    />
                    <label htmlFor="company" className="active">
                      Company
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
                    <Link
                      to="/vendors"
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

export const SaveVendor = withRouter(SaveVendorComponent);
