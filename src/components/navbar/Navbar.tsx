import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>dashboard </span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://png.pngtree.com/element_pic/00/16/07/06577d23c2b9d68.jpg"
            alt=""
          />
          <span>Paulo Tiago Magalhães</span>
        </div>
        <img src="/logo194.png" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
