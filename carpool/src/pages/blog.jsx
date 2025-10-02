import './blog.css';
export const Blog = (props) => {
  return (

    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm rounded-4 border-0">
        <img
          src={props.curElem.img}
          className="card-img-top rounded-top-4"
          alt="Blog"
        />

        <div className="card-body">
          <small className="text-muted d-block mb-2">
            {props.curElem.date}
          </small>
          <h5 className="card-title fw-semibold">{props.curElem.title}</h5>

          {props.curElem.desc && (
            <p
              className="card-text text-secondary"
              style={{ fontSize: "14px"}}
            >
              {props.curElem.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
