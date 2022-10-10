import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import necessary hooks from react-router-dom 
import { useParams } from "react-router-dom";
import { users } from "../dataDummy/users";

const DetailUser = () => {
  // const [data, setData] = useState(null);
  const params = useParams();
  // don't worry about this, we'll cover later

  const id = params.id

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  //   return () => {
  //     setData(null);
  //   };
  // }, []);

  return (
    // code element inside Container
    // display information that stored in data 
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h2>{users[id].name}</h2>
      <h3>{users[id].email}</h3>
    </Container>
  );
};

export default DetailUser;
