import { Link } from "react-router-dom";

interface AuthReferTextProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export default function AuthReferText({
  text,
  linkText,
  linkTo,
}: AuthReferTextProps) {
  return (
    <div className="flex space-x-1">
      <p>{text}</p>
      <Link className="font-bold underline" to={linkTo}>
        {linkText}
      </Link>
    </div>
  );
}
