const Alert = () => {
  const { name } = useParams();

  return (
    name != "corporate" && (
      <div className="xl:px-28 lg:px-24 md:px-20 px-10 bg-blue-700 text-white flex flex-col lg:flex-row items-center gap-x-10 py-10">
        <div className="flex items-center justify-center">
          <img
            src="/images/alert/warning-2.png"
            alt="Warning"
            className="h-[100px] min-w-[100px]"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl lg:text-2xl text-center lg:text-left font-bold mb-3">
            Rareminds - No Fees Policy for Placements, Recruitment, Internships
            & Training
          </h2>
          <p className="text-sm lg:text-md text-justify lg:text-left">
            We provide free skill development, training, internships, and
            placement support under Naan Mudhalvan & other programs. We will not
            charge students, faculty, or colleges. Report any fraudulent fee
            collection to 9902326951. Stay vigilant!
          </p>
        </div>
      </div>
    )
  );
};

export default Alert;
