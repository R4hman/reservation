import NotFoundImg from "../../../public/assets/404.png";
const NotFound = () => {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          padding: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ width: "400px", height: "500px" }}
          src={NotFoundImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
