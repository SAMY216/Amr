export default function Student(props) {
  const {
    displayForgetPass,
    setWarning,
    setMessage,
    user,
    setUser,
    password,
    setPassword,
    checkLoginStatus,
  } = props;

  return (
    <div className="border border-[#337ab7] rounded-md lg:w-2/5 md:w-3/5 sm:w-4/5 mx-auto max-w-md">
      <h4 className="bg-[#337ab7] text-[#fff] py-2.5 px-4 font-bold text-right text-sm">
        تسجيل دخول الطلاب
      </h4>
      <div className="grid grid-cols-2 gap-4 pt-7 pb-4 px-8 text-sm text-[#a94442] text-right">
        <div>
          <p>للتسجيل لأول مرة على النظام يجب ادخال</p>
          <p>اسم المستخدم: الرقم القومى كاملا 14 رقم</p>
          <p>و كلمة مرور: الرقم القومى كاملا 14 رقم</p>
          <p>ثم الضغط على تسجيل الدخول</p>
        </div>
        <div className="mr-3 -ml-2">
          <p>اذا تم التسجيل فى مرة سابقة يجب الدخول</p>
          <p>اسم المستخدم : الرقم القومى</p>
          <p>كلمة المرور الذى تم التسجيل بهما</p>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-[#555] mb-4 relative">
          <i className="absolute right-0 w-9 flex items-center justify-center bg-[#eee] h-full border border-[#ddd] rounded-r-md fa-solid fa-tag"></i>
          <input
            className="py-1.5 px-3 w-11/12 mr-8 z-10 border border-[#ddd] rounded-l-md input-focus"
            type="text"
            placeholder="اسم المستخدم"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div className="text-sm text-[#555] mb-4 relative">
          <i className="absolute right-0 w-9 flex items-center justify-center bg-[#eee] h-full border border-[#ddd] rounded-r-md fa-solid fa-lock"></i>
          <input
            className="py-1.5 px-3 w-11/12 mr-8 z-10 border border-[#ddd] rounded-l-md input-focus"
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="block text-sm text-[#ff0000] hover:text-[#1B3792] hover:underline mt-12 mb-3 text-left cursor-pointer"
          onClick={displayForgetPass}
        >
          نسيت كلمة المرور؟
        </button>
        <button
          className="block text-right bg-[#337ab7] border border-[#2e6da4] text-[#fff] py-1.5 px-3 rounded-md text-sm hover:bg-[#286090] hover:border-[#204d74] btn-focus"
          onClick={checkLoginStatus}
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}
