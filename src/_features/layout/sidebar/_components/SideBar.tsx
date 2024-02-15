const SideBar = () => {
  return (
    <div className="border w-[75px] shadow-lg">
      <div className="w-full h-full hover:w-[200px] hover:shadow-lg bg-white transition-[width]">
        <div className="flex justify-center font-bold p-2">LOGO</div>
        <div className="flex flex-col my-4">
          <button className="border w-full">Home</button>
          <button className="border w-full">Requests</button>
          <button className="border w-full">Reports</button>
          <button className="border w-full">Analytics</button>
          <button className="border w-full">Admin</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
