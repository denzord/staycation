import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
export default function Categories({ data }) {
  return data.map((category, index1) => {
    if(category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="row row-cols-lg-4 row-cols-1">
            {
              category.itemId.map((item, index2) => {
                return (
                  <div
                    className="col mb-3 mb-lg-0"
                    key={`category-${index1}-item-${index2}`}
                    style={{minHeight:"150px"}}
                  >
                    <Fade bottom delay={300 * index2}>
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper">
                          <img
                            src={
                              item.imageId[0]
                                ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                : ""
                            }
                            alt={item.title}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-blok text-gray-800"
                          >
                            <h5 className="h4">{item.title}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            }
          </div>
        </Fade>
      </section>
    );
  });
}
