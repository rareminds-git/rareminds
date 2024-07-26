import Logo from "../assets/images/logo.svg";

const LoaderComponent = () => {
  return (
    <>
      <div className="grid w-full min-h-screen place-items-center">
        <div className="grid gap-6 text-white place-items-center">
          <Icon icon="svg-spinners:bars-rotate-fade" className="text-4xl" />
          <img src={Logo} width={300} height={300} />
        </div>
      </div>
    </>
  );
};

export default LoaderComponent;
