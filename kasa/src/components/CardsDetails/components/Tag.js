const Tag = (props) => {
  return (
    <div className="tag">
      {props.tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </div>
  );
};

export default Tag;
