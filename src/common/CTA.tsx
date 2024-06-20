const CTA = ({ content }) => {
  // console.log("content", content);
  return (
    <>
      <section className="md:px-5 px-10">
        <div className="grid space-y-10 md:grid-cols-3 my-12 md:mx-32 mx-12 place-items-center border-y-red-200 border-2 border-x-0">
          <h3 className="md:col-span-3 mb-4 text-left mt-4 font-Syne font-bold md:text-3xl text-red-400 md:mx-8 text-xl">
            Form Fill: Unlock Your Potential!
          </h3>
        </div>
      </section>
    </>
  );
};

export default CTA;
