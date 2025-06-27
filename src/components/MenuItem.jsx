function MenuItem(props) {
  const { icon: Icon, text, ...resProps } = props;
  return (
    <button className="btn bg-white/0 border-none shadow-none justify-start gap-2 hover:opacit-20 w-full">
      <Icon {...resProps} />
      {text}
    </button>
  );
}
export default MenuItem;
