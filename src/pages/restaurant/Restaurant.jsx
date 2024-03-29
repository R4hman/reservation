import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  return <div>restaurant {id}</div>;
};

export default Restaurant;
