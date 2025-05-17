
function Navbar() {
  return (
    <nav className="flex justify-between bg-slate-600 text-white py-2 mt-2 mr-2 ml-2 rounded-lg">
      <div className="logo flex ">
        <span className="font-bold text-xl mx-10">MyTask</span>
        <img className="h-8" src="src\assets\to-do_logo.svg"/>
      </div>
      <ul className="flex gap-8 mx-10">
        <li
         className="cursor-pointer hover:bg-slate-900 text-white p-3 py-1 rounded-md font-bold ">Home</li>
        <li 
        className="cursor-pointer hover:bg-slate-900 text-white p-3 py-1 rounded-md font-bold">Your Tasks</li>
        <li 
        className="cursor-pointer hover:bg-slate-900 text-white p-3 py-1 rounded-md font-bold">New User</li>
      </ul>
    </nav>
  )
} 

export default Navbar