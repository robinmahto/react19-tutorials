const user = {
  name: "Heady Lamarr",
  imageUrl: "https://react.dev/images/docs/scientists/yXOvdOSs.jpg",
  imageSize: 90,
};

const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <p>{user.name}</p>
    </>
  );
};

export default AboutPage;
