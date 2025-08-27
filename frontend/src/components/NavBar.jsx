import { Bell, Menu, Search } from "lucide-react";
import React from "react";

function NavBar() {
  return (
    <div className="navbar fixed z-50 bg-base-100">
      <div className="navbar-start">
        <div className="flex items-center gap-x-30 bg-white rounded-full px-3 py-1 shadow-sm">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Menu className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/bayes">Bayes forecast</a>
              </li>
              <li>
                <a>Transformer forecast</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-ghost btn-circle">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Bell className="h-5 w-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Forecast</a>
      </div>
    </div>
  );
}

export default NavBar;
