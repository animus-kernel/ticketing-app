import Link from "next/link";
import React from "react";

function getActions(user: Object | null) {
  return user
    ? [
        {
          label: "Sign Out",
          href: "/auth/signout",
        },
      ]
    : [
        { label: "Sign In", href: "/auth/signin" },
        { label: "Sign Up", href: "/auth/signup" },
      ];
}

const Header = ({ currentUser }: { currentUser: Object | null }) => {
  const actions = getActions(currentUser).map((item) => {
    return (
      <li key={item.label} className="nav-item">
        <Link className="nav-link" href={item.href}>
          {item.label}
        </Link>
      </li>
    );
  });
  return (
    <nav className="navbar navbar-light bg-light p-3">
      <Link className="navbar-brand" href="/">
        Gitix
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{actions}</ul>
      </div>
    </nav>
  );
};

export default Header;
