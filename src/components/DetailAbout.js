import PropTypes from "prop-types";

const DetailAbout = (props) => {
  return (
    <>
      <h1>title: {props.title}</h1>
      <p>summary: {props.summary}</p>
      <p>total guest: {props.total}</p>
    </>
  );
};

DetailAbout.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  total: PropTypes.number,
};

export default DetailAbout;