function Button({label, bgColor, txtColor}) {
  return (
    <button className={`border ${bgColor ? bgColor : 'border-purple-300'} ${txtColor ? txtColor : 'text-black'} p-3 m-4 rounded-md`}>
      {label}
    </button>
  );
}

export default Button