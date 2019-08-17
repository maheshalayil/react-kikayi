import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../actions";
import { withRouter, Link } from "react-router-dom";

const VendorsComponent = props => {
  
  const dispatch = useDispatch();
  const vendors = useSelector(state => state.vendorState.vendors);
  
  console.log('vendor state', vendors);

  useEffect(() => {
    (async () => {
      if(vendors.length === 0)
        await dispatch(Actions.loadvendor());
    })();
  }, []);

  const onAdd = () => {
    dispatch(Actions.addvendor());
    props.history.push("/vendor/save");
  };

  const onEdit = item => {
    dispatch(Actions.editvendor(item.id));
    props.history.push("/vendor/save");
  };

  const onDelete = item => {
    dispatch(Actions.deletevendor(item.id));
  };

  const getImage = () => {
    return `/images/avatar/avatar-${Math.floor(Math.random() * 10) + 1  }.png`;
  }

  return (
    <section id="content">
      <div className="row">
        <div className="col s8">
          <h5 className="header">Vendors</h5>
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
        {vendors.map(item => {
          return (
            <div className="col s12 m3 l3" key={item.id}>
              <div className="card small gradient-45deg-light-blue-cyan gradient-shadow" style={{maxHeight:150}}>
                <div className="card-image cyan" style={{maxHeight:130}} >
                  <div className="row">
                    <div className="col s4 mt-3">
                      <img src={getImage()}></img>
                    </div>
                    <div className="col s8 white-text right mt-6">
                      <div>{item.firstName} {item.lastName}</div>
                      <div>{item.company}</div>
                      <div>{item.phone}</div>
                    </div>
                  </div>
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
export const Vendors = withRouter(VendorsComponent);
