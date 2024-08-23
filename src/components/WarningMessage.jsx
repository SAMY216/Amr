export default function WarningMessage(props) {
  const { message, setWarning } = props;
  return (
    <div
      className="absolute w-full h-full bg-black/50 -mt-5 top-0 right-0 z-20 min-h-screen p-3 text-center"
      onClick={() => {
        setWarning(false);
      }}
    >
      <div className="flex flex-col bg-white rounded-lg w-11/12 mx-auto border border-[#00000033] warn-box">
        <div className="flex border-b border-[#e5e5e5] p-4 relative">
          <button
            className="fa-solid fa-xmark text-slate-300 absolute top-4 right-3 hover:text-slate-600 duration-200"
            onClick={() => {
              setWarning(false);
            }}
          ></button>
          <p className="text-lg text-[#333] mr-2">تنبية</p>
        </div>
        <div className="p-3.5 text-right text-[#333]">{message}</div>
      </div>
    </div>
  );
}
