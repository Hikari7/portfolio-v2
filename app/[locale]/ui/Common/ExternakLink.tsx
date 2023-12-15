import Link from "next/link";

export default function ExternalLink(props : any){
    const href = props.href;
    const link = href && (href.startsWith('/'));

    if (link) {
      return (
        <Link href={href}>
          {props.children}
        </Link>
      );
    }

    return <a target="_blank" {...props} />;
  };