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
      <a
        href={link}
        target="_blank"
        className="inline-flex text-white text-2xl mr-2 rounded"
        rel="noreferrer"
      >
        <img src={icon} />
        {/* <Icon
          icon={icon}
          className={`${type === "header" ? "text-red-400 md:text-3xl text-xl rounded-full" : "text-red-400 text-xl"} transition-all duration-200 ease-in hover:text-red-400`}
        /> */}
      </a>
    </>
  );
};

export default FooterIcon;
