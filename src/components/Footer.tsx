import {
  InstaLogo as InstaLogo,
  DiscordLogo as DiscordLogo,
  IntroProgramLogo,
  FacebookLogo,
} from "./SVG";
type JSXWClassname = ({ className = "" }) => JSX.Element;
type imageLinkProp = {
  Logo: JSXWClassname;
  url: string;
  name: string;
};

export const Social_link = ({ Logo, url, name }: imageLinkProp) => {
  return (
    <a
      href={url}
      className=" text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      <Logo className="w-6 h-6" />
      <span className="sr-only">{name}</span>
    </a>
  );
};
export const Footer = () => {
  const socials = [
    {
      Logo: FacebookLogo,
      url: "https://www.facebook.com/EAUSYD",
      name: "facebook",
    },
    {
      Logo: InstaLogo,
      url: "https://www.instagram.com/eausyd",
      name: "insta",
    },
    {
      Logo: DiscordLogo,
      url: "https://discord.gg/RUexmBmET8",
      name: "discord",
    },
    {
      // TODO add correct link to intro sign up program
      Logo: IntroProgramLogo,
      url: "https://discord.gg/fdsa",
      name: "intro program",
    },
  ];
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex items-center sm:justify-between">
        <div className="flex mt-4 space-x-6 justify-center sm:justify-center sm:mt-0">
          {socials.map((social) => (
            <Social_link key={social.url} {...social} />
          ))}
        </div>
      </div>
    </footer>
  );
};
