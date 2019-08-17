import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../actions/";
import { withRouter, Link } from "react-router-dom";

const ProductsComponent = props => {
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.productState.products);
  
  console.log('product state', products);

  useEffect(() => {
    (async () => {
      if(products.length === 0)
        await dispatch(Actions.loadProducts());
    })();
  }, []);

  const onAdd = () => {
    dispatch(Actions.addProduct());
    props.history.push("/product/save");
  };

  const onEdit = item => {
    dispatch(Actions.editProduct(item.id));
    props.history.push("/product/save");
  };

  const onDelete = item => {
    dispatch(Actions.deleteProduct(item.id));
  };

  const getImage = () => {
    return `images/gallary/${Math.floor(Math.random() * 30) + 1  }.png`;
  }

  return (
    <section id="content">
      <div className="row">
        <div className="col s8">
          <h5 className="header">Products</h5>
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
        {products.map(item => {
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
export const Products = withRouter(ProductsComponent);
