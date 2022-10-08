const Host = (props) => {
  return (
    <div className="host">
      <h3>{props.host.name}</h3>
      <div className="host_img">
        <img src={props.host.picture} alt="" />
      </div>
    </div>
  );
};

export default Host;
