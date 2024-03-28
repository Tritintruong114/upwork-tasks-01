import ArrowIcon from "@/public/icons/arrow-down";

const Options = (props: any) => {
  const {
    setseeOptions,
    seeOptions,
    setSeeTips,
    seeTips,
    seeEnrich,
    setSeeEnrich,
    setSeeTailor,
    seeTailor,
    register,
  } = props;
  return (
    <div
      className={`pl-[30px] overflow-hidden pb-[15px] pt-[8px] duration-300`}
    >
      <button
        onClick={() => setseeOptions((prev: any) => !prev)}
        className="flex  justify-between w-full items-center"
      >
        <span className="text-[14px]">See options</span>
        <div
          className={`${seeOptions ? "rotate-180" : "rotate-0"} duration-300`}
        >
          <ArrowIcon />
        </div>
      </button>

      <div
        className={`flex  flex-col overflow-hidden mt-3 max-h-[0px] duration-300 transition-all ${
          seeOptions ? "max-h-[450px]" : ""
        }`}
      >
        {/* Group */}
        <div className="flex flex-col text-[14px]">
          <span className="mb-3 text-[12px]">
            Get useful tips, inspiration, and offers via e-communication.
          </span>
          <div className="flex gap-6 mb-[15px]">
            <label
              htmlFor="Yes"
              onClick={() => setSeeTips(true)}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="Yes"
                checked={seeTips}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                {...register("tips")}
                className={`rounded-[50%]  border accent-black ${
                  seeTips === true && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>Yes</span>
              </div>
            </label>
            <label
              htmlFor="no"
              onClick={() => setSeeTips(false)}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="no"
                checked={!seeTips}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                {...register("tips")}
                className={`rounded-[50%]  border accent-black ${
                  seeTips === false && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>No</span>
              </div>
            </label>
          </div>
        </div>

        {/* Group 2 */}
        <div className="flex flex-col text-[14px]">
          <span className="mb-3 text-[12px]">
            Tailor Typeform to my needs based on my activity.See Privacy Policy
          </span>
          <div className="flex gap-6 mb-[15px]">
            <label
              htmlFor="tailorYes"
              className="inline-flex items-center cursor-pointer"
              onClick={() => setSeeTailor(true)}
            >
              <input
                type="checkbox"
                id="tailorYes"
                checked={seeTailor}
                {...register("tailor")}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                className={`rounded-[50%]  border accent-black ${
                  seeTailor === true && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>Yes</span>
              </div>
            </label>
            <label
              htmlFor="tailorNo"
              className="inline-flex items-center cursor-pointer"
              onClick={() => setSeeTailor(false)}
            >
              <input
                type="checkbox"
                id="tailorNo"
                checked={!seeTailor}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                {...register("tailor")}
                className={`rounded-[50%]  border accent-black ${
                  seeTailor === false && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>No</span>
              </div>
            </label>
          </div>
        </div>
        {/* Group 3 */}
        <div className="flex flex-col text-[14px]">
          <span className="mb-3 text-[12px]">
            Enrich my data with select third parties for more relevant
            content.See Privacy Policy
          </span>
          <div className="flex gap-6 mb-[15px]">
            <label
              htmlFor="enrichYes"
              className="inline-flex items-center cursor-pointer"
              onClick={() => setSeeEnrich(true)}
            >
              <input
                type="checkbox"
                id="enrichYes"
                {...register("enrich")}
                checked={seeEnrich}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                className={`rounded-[50%]  border accent-black ${
                  seeEnrich === true && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>Yes</span>
              </div>
            </label>
            <label
              htmlFor="enrichnNo"
              className="inline-flex items-center cursor-pointer"
              onClick={() => setSeeEnrich(false)}
            >
              <input
                {...register("enrich")}
                type="checkbox"
                id="enrichnNo"
                checked={!seeEnrich}
                style={{
                  borderRadius: "50%",
                  appearance: "none",
                  height: "20px",
                  width: "20px",
                }}
                className={`rounded-[50%]  border accent-black ${
                  seeEnrich === false && "checked:enabled:border-[6px]"
                } border-black`}
              />
              <div className="ml-1">
                <span>No</span>
              </div>
            </label>
          </div>
        </div>
        {/* Finish Group */}
        <span className="text-[14px] text-black/60">
          You can update your preferences in your Profile at any time
        </span>
      </div>
    </div>
  );
};

export default Options;
