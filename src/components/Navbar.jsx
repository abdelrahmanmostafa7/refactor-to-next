const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4  shadow-md">
      <h1 className="text-2xl font-bold">Where Are You Go!</h1>
      <button className="font-bold hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl px-2 cursor-pointer">
        Light Mood
      </button>
    </div>
  );
}

export default Navbar