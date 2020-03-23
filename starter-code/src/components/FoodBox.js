import React from "react";
import foods from "../foods.json";
import "bulma/css/bulma.css";

const FoodBox = () => {
  //const [food, setFood] = useState([]);

  const addFoodHandler = () => {};

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <table className="table">
              <ul key="foods">
                {foods.map(food => (
                  <li key={food}>
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={food.image} alt="pictures" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>{food.name}</strong> <br />
                            <small>{food.calories}</small>
                          </p>
                        </div>
                      </div>
                      <div className="media-right">
                        <div className="field has-addons">
                          <div className="control">
                            <input type="number" className="input" value="1" />
                          </div>
                          <div className="control">
                            <button
                              className="button is-info"
                              onClick={addFoodHandler(() => {})}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBox;
