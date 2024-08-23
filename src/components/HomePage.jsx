import { useState } from "react";
import Employee from "./Employee";
import ForgetPass from "./ForgetPass";
import Student from "./Student";

export default function HomePage(props) {
  const { warning, setWarning, setMessage, user, setUser, password, setPassword, checkLoginStatus } = props;

  const [employee, setEmployee] = useState(false);
  const [student, setStudent] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);

  function displayEmployee() {
    setForgetPass(false);
    setStudent(false);
    setEmployee(!employee);
  }

  function displayStudent() {
    setEmployee(false);
    setForgetPass(false);
    setStudent(!student);
  }

  function displayForgetPass() {
    setEmployee(false);
    setStudent(false);
    setForgetPass(!forgetPass);
  }

  return (
    <div className="text-center px-4">
      <h1 className="text-4xl font-semibold my-5 pb-2 border-b border-[#eee]">
        <span className="text-[#f06b2c]">نظام ابن الهيثم </span>
        <span className="text-[#1595c2]">لإدارة شئون الطلاب </span>
        <span className="text-2xl font-normal text-[#176c80]">
          العام الدراسي
        </span>
      </h1>
      <div className="grid grid-cols-3 lg:max-w-[700px] max-w-[600px] mx-auto text-lg mb-1">
        <button
          className="mx-1 py-2.5 px-4 text-[#fff] bg-[#f0ad4e] rounded-md btn-focus"
          onClick={displayEmployee}
        >
          دخول الموظفين
        </button>
        <button
          className="mx-1 py-2.5 px-4 text-[#fff] bg-[#5bc0de] rounded-md btn-focus"
          onClick={displayStudent}
        >
          دخول الطلاب
        </button>
        <button className="mx-1 py-2.5 px-4 text-[#fff] bg-[#337ab7] rounded-md btn-focus">
          أحدث النتائج المعلنة
        </button>
      </div>
      {employee && (
        <Employee
          displayForgetPass={displayForgetPass}
          setWarning={setWarning}
          setMessage={setMessage}
        />
      )}
      {student && (
        <Student
          displayForgetPass={displayForgetPass}
          setWarning={setWarning}
          setMessage={setMessage}
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
          checkLoginStatus={checkLoginStatus}
        />
      )}
      {forgetPass && (
        <ForgetPass setWarning={setWarning} setMessage={setMessage} />
      )}

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-7">
        <div className="md:col-span-2 col-span-1 border border-[#337ab7] rounded-md">
          <h4 className="bg-[#337ab7] text-[#fff] py-2.5 px-4 font-normal text-right text-sm">
            مميزات النظام
          </h4>
          <ul className="py-6 px-4">
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              استخراج تقارير تفصيلية عن البيانات الشخصية والدراسية للطلاب
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              اختيار وطباعة البطاقات الشخصية للطلاب مزودة بخاصية (BarCode)
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              توزيع أرقام جلوس طلاب سنة دراسية - توزيع لجان امتحان سنة دراسية.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              إعداد كشوف (توزيع الطلاب على اللجان - توزيع المقررات على الطلاب -
              رصد الدرجات لمقرر معين).
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              إمكانية عرض المقررات والجداول الدراسية وجداول الامتحانات على موقع
              الجامعة
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              أداء كافة أعمال الكنترول بدءا من مرحلة إدخال البيانات وتطبيق قواعد
              الرأفة آلياً وحتى طباعة النتائج.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              إعلان نتائج الطلاب على موقع الجامعة فور اعتمادها.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              تسجيل محاولات الدخول غير المشروع وأماكن الدخول وعدد المحاولات ووقت
              كل محاولة.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              استخدام مبدأ تشفير البيانات بين العميل والخادم (SSL
              Communication).
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              تحديد أرقام أجهزة الحاسب (MAC's - IP) المسموح للمستخدم الدخول
              منها.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              يعمل النظام طبقا للمواصفات القياسية للعمل الإلكتروني (E business).
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#dd4b39] mt-2">
              يحتوى النظام على بريد إلكتروني داخلي يعمل بين جميع المستخدمين
              والمشرفين لضمان أداء خدمة الدعم الفني بأقصى سرعة.
            </li>
            <li className="rounded bg-[#f4f4f4] p-2.5 text-xs text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
              العمل على بيئة الإنترنت مما ييسر العمل من أى مكان و قاعدة بيانات
              موحدة للجامعة شاملة بيانات كل الكليات.
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <div className="md:col-span-2 col-span-1 border border-[#ebccd1] rounded-md">
            <h4 className="bg-[#f2dede] text-[#a94442] py-2.5 px-4 font-normal text-right text-sm bg-gradient-to-b from-ntn-white to-ntn2-white bg-repeat-x">
              اتصل بنا
            </h4>
            <ul className="py-6 px-4">
              <li className="flex gap-2 items-center rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[11px] text-[#337ab7] flex gap-1 items-center">
                  <i className="fa-solid fa-mobile-screen-button fa-xs"></i>
                  <span>تطبيق للهواتف الذكية</span>
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="text-[#ff0000]">
                    لدخول الطلاب من خلال الهواتف الذكية
                  </span>
                  <a
                    href="https://play.google.com/store/apps/details?id=eg.edu.mans.mustudentportal"
                    target="_blank"
                  >
                    <i className="fa-brands fa-android fa-lg text-[#3c763d]"></i>
                  </a>
                  <a
                    href="https://itunes.apple.com/us/app/student-portal-%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8/id1296750386?ls=1&mt=8"
                    target="_blank"
                  >
                    <i className="fa-brands fa-apple fa-lg text-[#a94442]"></i>
                  </a>
                </span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-solid fa-house-chimney fa-xs ml-1"></i>
                  <span>العنوان </span>
                </span>
                <span>
                  مصر - جامعة المنصورة - مجمع الخدمات الطلابية - شركة انطلاق
                  لتقنية الاتصالات والمعلومات
                </span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-solid fa-user fa-xs ml-1"></i>
                  <span>الدعم الفني للطلاب </span>
                </span>
                <span>شئون الطلاب بالكلية</span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-solid fa-user fa-xs ml-1"></i>
                  <span>الدعم الفني للموظفين </span>
                </span>
                <span>
                  +20(50) 2223694/ +20 (50) 2223693
                  <a className="text-red-500" href="#">
                    {" "}
                    (برنامج الدعم الفني)
                  </a>
                </span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-solid fa-mobile-screen-button fa-xs ml-1"></i>
                  <span>الرقم الداخلي </span>
                </span>
                <span>11001</span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-brands fa-html5 fa-sm ml-1"></i>
                  <span>المتصفح </span>
                </span>
                <span>لضمان عمل النظام بكافة عالية يجب استخدام جوجل كروم </span>
              </li>
              <li className="rounded bg-[#f4f4f4] p-2.5 text-[11px] text-right font-semibold text-[#444] border-r-2 border-[#f39c12] mt-2">
                <span className="text-[#337ab7]">
                  <i className="fa-solid fa-virus fa-xs ml-1"></i>
                  <span>شهادة امن النظام </span>
                </span>
                <span>
                  فى حالة تعذر الدخول للنظام
                  <a
                    className="text-red-500"
                    href="http://aviaition.mans.edu.eg/static/Upload/manscert.reg"
                  >
                    (اضغط هنا)
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="text-[14px] font-semibold mt-5">
        <span className="text-[#337ab7]">جميع الحقوق محفوظة &copy; </span>
        <span>
          <a
            className="text-[#ff0000] hover:underline hover:text-[#2a527c]"
            href="https://www.intlaqcit.com/"
          >
            شركة انطلاق لتقنية الاتصالات والمعلومات
          </a>
          -
        </span>
        <span>
          <a
            className="text-[#ff0000] hover:underline hover:text-[#2a527c]"
            href="https://www.mans.edu.eg/"
          >
            جامعة المنصورة
          </a>
        </span>
        <span className="block">
          <a
            className="text-[#ff0000] hover:underline hover:text-[#2a527c]"
            href="#"
          >
            (سياسة خصوصية وتأمين البيانات)
          </a>
        </span>
      </footer>
    </div>
  );
}
