import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListHero.scss";
import hero from "../../images/hero.jpg";

const ListHero = ({ isNeedUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [heroArray, setHeroArray] = useState(null);
  useEffect(() => {
    getHero();
  }, [isNeedUpdate]);

  async function getHero() {
    try {
      setLoading(true);
      const heroResponse = await axios.get("/api/info", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setHeroArray(heroResponse.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function removeHero(id) {
    try {
      await axios
        .delete(
          `/api/delete${id}`,
          { id },
          {
            headers: { "Content-Type": "applicatiom/json" },
          }
        )
        .then(() => getHero());
    } catch (error) {
      console.log(error.message);
    }
  }
  if (loading) {
    return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" list">
      <h3>Список Супергероев</h3>
      <div className=" flex ">
        <ul className=" flexing ">
          {heroArray &&
            heroArray.map((el, index) => {
              return (
                <li key={index} className="list_item">
                  <div className="open">
                    <p className="index">{index + 1}</p>
                    <div className="icon">
                      <i className="material-icons blue-text">create</i>
                      <i
                        className="material-icons red-text "
                        onClick={() => removeHero(el._id)}
                      >
                        delete
                      </i>
                    </div>
                  </div>
                  <div>
                    <span className="listing">
                      <img
                        className="hero"
                        src={hero}
                        alt="супермен"
                        width="150"
                      />
                    </span>

                    <p className="listing">
                      Nickname: <span className="info">{el.nickname}</span>
                    </p>
                    <p className="listing">
                      Real_name:<span className="info">{el.real_name}</span>
                    </p>
                    <p className="listing">
                      Origin_description:{" "}
                      <span className="info">{el.origin_description}</span>{" "}
                    </p>
                    <p className="listing">
                      Superpowers:<span className="info">{el.superpowers}</span>
                    </p>
                    <p className="listing">
                      Catch_phrase:
                      <span className="info">{el.catch_phrase}</span>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default ListHero;
