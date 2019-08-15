import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCategory } from "../../actions/";

export const SaveCategory = () => {
  const categoryFromStore = useSelector(state => state.categoryState.category);
  const [category, setCategory] = useState(categoryFromStore);

  return (
    <section id="content">
      <div className="row">
        <div className="col s12">
          <h5 className="header">{ category.id ? 'Add Category' : 'Edit Category'}</h5>
        </div>
      </div>
    </section>
  );
};
