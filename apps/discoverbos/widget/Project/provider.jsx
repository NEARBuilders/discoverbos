function Provider({ View, path }) {
  const data = Social.getr(path, "final");

  return <View {...data} path={path} />;
}

return Provider(props);
