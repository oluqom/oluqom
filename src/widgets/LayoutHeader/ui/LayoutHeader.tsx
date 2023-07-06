const LayoutHeader = () => {
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tab-index={0}
            tabIndex={0}
            className="btn btn-ghost focus-visible:btn-neutral btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu z-50 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a
          tab-index={0}
          className="btn btn-ghost focus-visible:btn-neutral normal-case text-xl"
        >
          oluqom
        </a>
      </div>
      <div className="navbar-end">
        <a
          href="https://t.me/oluqom"
          tab-index={0}
          className="btn btn-primary focus-visible:btn-neutral"
        >
          Hire me
        </a>
      </div>
    </header>
  );
};

export default LayoutHeader;
