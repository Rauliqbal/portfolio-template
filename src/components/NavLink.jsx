import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavLink({ href, children, className }) {
   return (
      <Link className={className} to={href}>
         {children}
      </Link>
   );
}
