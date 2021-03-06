import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../actions/";
import { withRouter, Link } from "react-router-dom";

const CategoriesComponent = props => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categoryState.categories);

  useEffect(() => {
    (async () => {
      if(categories.length === 0)
        await dispatch(Actions.loadCategory());
    })();
  }, []);

  const onAdd = () => {
    dispatch(Actions.addCategory());
    props.history.push("/category/save");
  };

  const onEdit = item => {
    dispatch(Actions.editCategory(item.id));
    props.history.push("/category/save");
  };

  const onDelete = item => {
    dispatch(Actions.deleteCategory(item.id));
  };

  const getImage = () => {
    return `images/gallary/${Math.floor(Math.random() * 30) + 1  }.png`;
  }
  
  return (
    <section id="content">
      <div className="row">
        <div className="col s8">
          <h5 className="header">Categories</h5>
        </div>
        <div className="col s4">
          <button
            onClick={onAdd}
            className="btn-floating btn-small waves-effect waves-light red right mt-3"
          >
            <i class="material-icons">add</i>
          </button>
        </div>
      </div>
      <div className="row">
        <hr />
        {categories.map(item => {
          return (
            <div className="col s12 m3 l3" key={item.id}>
              <div className="card small gradient-45deg-light-blue-cyan gradient-shadow" style={{maxHeight:150}}>
                <div className="card-image" style={{maxHeight:100}} >
                  <img src={getImage()} alt="sample" />
                  <span className="card-title">{item.name}</span>
                </div>
                <div class="card-action">
                  <button
                    onClick={() => onEdit(item)}
                    className="btn-floating btn-small waves-effect waves-light blue mr-5"
                  >
                    <i class="material-icons">edit</i>
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="btn-floating btn-small waves-effect waves-light cyan"
                  >
                    <i class="material-icons small">delete</i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export const Categories = withRouter(CategoriesComponent);
