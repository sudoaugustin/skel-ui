const items = [{ title: "", description: "" }];

export default function Highlights() {
  return (
    <div>
      {items.map(({ title, description }) => (
        <div key={title}>
          <div></div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
