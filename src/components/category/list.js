import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCategory } from "../../actions/";

import { withRouter } from "react-router-dom";

export const Categories = propsData => {
  const dispatch = useDispatch();
  console.log("history is ", propsData);
  const props = useSelector(state => {
    return {
      categories: state.categoryState.categories
    };
  });

  useEffect(() => {
    (async () => {
      await dispatch(loadCategory());
    })();
  }, []);

  return (
    <section id="content">
      <div className="row">
        <div className="col s8">
          <h5 className="header">Categories</h5>
        </div>
        <div className="col s4">
          <a class="btn-floating btn-small waves-effect waves-light red right mt-3">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
      <div className="row">
        <hr />
        {props.categories.map(item => {
          return (
            <div className="col s12 m3 l3" key={item.id}>
              <div className="card small gradient-45deg-light-blue-cyan gradient-shadow">
                <div className="card-image">
                  <img src="images/gallary/23.png" alt="sample" />
                  <span className="card-title">{item.name}</span>
                </div>
                <div className="card-content">
                  <p>{item.description || "no description"}.</p>
                </div>
                <div class="card-action">
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
