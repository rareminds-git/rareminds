const FooterIcon = ({
  icon,
  link,
  type,
}: {
  icon: string;
  link: string;
  type: string;
}) => {
  return (
    <>
      <a href={link} target="_blank" className="flex px-2" rel="noreferrer">
        <Icon
          icon={icon}
          className={`${type === "header" ? "text-white text-2xl rounded" : "text-gray-400 text-xl"} transition-all duration-200 ease-in hover:text-white`}
        />
      </a>
    </>
  );
};

export default FooterIcon;
