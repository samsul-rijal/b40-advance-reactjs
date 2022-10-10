// import necessary react-bootstrap component 
import { Container } from "react-bootstrap";

// import hooks from react-router-dom here
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const handleNaviateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <Container className="text-center">
      <p className="h1">Home</p>
      <p>
        Cras sit amet mauris ac urna pellentesque rhoncus sed nec felis. Sed
        augue tortor, pretium euismod massa eu, fringilla viverra ante. Proin ut
        nisl neque. In varius nibh eget diam pharetra, sed gravida sem commodo.
        Proin in tortor tristique lorem dignissim elementum. Quisque gravida
        augue quis aliquam ultrices. Nullam risus est, malesuada vitae pretium
        eu, congue a magna. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec et maximus tellus, sit
        amet hendrerit augue.
      </p>
      {/* code element here */}
      <button onClick={handleNaviateToSignIn}>Click to Signin</button>
    </Container>
  );
}

export default Home;
