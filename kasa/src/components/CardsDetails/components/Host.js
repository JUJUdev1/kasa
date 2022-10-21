const Host = (props) => {
  return (
    <div className="host">
      <h3 className="host_title">{props.host.name}</h3>
      <div className="host_img">
        <img src={props.host.picture} alt="" />
      </div>
    </div>
  );
};

export default Host;
