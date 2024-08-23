export default function Employee(props) {
  const { displayForgetPass, setWarning, setMessage } = props;
  return (
    <div className="border border-[#337ab7] rounded-md lg:w-2/5 md:w-3/5 sm:w-4/5 mx-auto max-w-md">
      <h4 className="bg-[#337ab7] text-[#fff] py-2.5 px-4 font-bold text-right text-sm">
        تسجيل دخول الموظفين
      </h4>
      <div className="p-4">
        <div className="text-sm text-[#555] mb-4 relative">
          <i className="absolute right-0 w-9 flex items-center justify-center bg-[#eee] h-full border border-[#ddd] rounded-r-md fa-solid fa-tag"></i>
          <input
            className="py-1.5 px-3 w-11/12 mr-8 z-10 border border-[#ddd] rounded-l-md input-focus"
            type="text"
            placeholder="اسم المستخدم"
          />
        </div>
        <div className="text-sm text-[#555] mb-4 relative">
          <i className="absolute right-0 w-9 flex items-center justify-center bg-[#eee] h-full border border-[#ddd] rounded-r-md fa-solid fa-lock"></i>
          <input
            className="py-1.5 px-3 w-11/12 mr-8 z-10 border border-[#ddd] rounded-l-md input-focus"
            type="password"
            placeholder="كلمة المرور"
          />
        </div>
        <button
          className="block text-right mt-12 bg-[#337ab7] border border-[#2e6da4] text-[#fff] py-1.5 px-3 rounded-md text-sm hover:bg-[#286090] hover:border-[#204d74] btn-focus"
          onClick={() => {
            setWarning(true);
            setMessage("برجاء التاكد من اسم المستخدم وكلمة المرور")
          }}
        >
          تسجيل الدخول
        </button>
        <button
          className="block text-[#1B3792] underline mr-auto cursor-pointer"
          onClick={displayForgetPass}
        >
          نسيت كلمة المرور؟
        </button>
      </div>
    </div>
  );
}
