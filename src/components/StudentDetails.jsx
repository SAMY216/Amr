import { useState } from "react";

export default function StudentDetails(props) {
  const { setIsStudentAvailable } = props;
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="relative">
      <div className="absolute -top-1 left-[5px] bg-[#eaf4fd] w-[40px] h-[35px] p-1 flex items-center justify-center cursor-pointer border border-[#c5dbec] rounded">
        <i
          className="fa-solid fa-power-off w-4/5 h-4/5 bg-[#f00] text-[#fff] flex items-center justify-center"
          onClick={() => {
            setIsStudentAvailable(false);
          }}
        ></i>
      </div>
      <div className="p-2.5 bg-[#f3fafe] mb-3">
        <div className="bg-[#85b5d9] w-full h-2 border border-[#4297d7]"></div>
        <div className="flex items-center gap-4">
          <div className="w-[60px] h-[60px] overflow-hidden">
            <img className="w-fit" src="../../src/photos/user.png" alt="" />
          </div>
          <div className="text-[12px] font-semibold">
            <span className="text-[#0088cc] ml-2">
              عبدالرحمن نصر توفيق هيكل{" "}
            </span>
            <span className="text-[#a51f17]">
              ثالثة-قسم الهندسة المدنية-معهد هندسة وتكنولوجيا الطيران بإمبابة –
              جيزة
            </span>
          </div>
          <div className="text-[9px] font-semibold text-left mt-8">
            جميع الحقوق محفوظة &copy;{" "}
            <a
              className="text-[#0088cc] hover:underline hover:text-[#005580] cursor-pointer"
              href="https://www.intlaqcit.com/"
              target="_blank"
            >
              شركة انطلاق لتقنية الاتصالات والمعلومات
            </a>{" "}
            -{" "}
            <a
              className="text-[#0088cc] hover:underline hover:text-[#005580] cursor-pointer"
              href="https://www.mans.edu.eg/"
              target="_blank"
            >
              جامعة المنصورة
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 border-t-[8px] border-[#2f6995]">
        <div className="col-span-1 p-[10px] border-l-[8px] border-[#2f6995]">
          <div className="rounded-md overflow-hidden font-semibold">
            <p className="text-center text-[18px] bg-[#6ea7d1] text-[#fff] border border-[#2e6e9e]">
              الطلاب
            </p>
            <p className="bg-[#e3f1fc] text-[#2e6e9e] p-2 border border-[#ddd] cursor-pointer">
              بيانات الطلاب
            </p>
          </div>
          <ul>
            <li
              className={`text-[#191970] py-1 pr-7 border-b hover:border hover:border-[#6ea7d1] ${
                activeTab === "exam"
                  ? "bg-[#fbec88]"
                  : "bg-[#f9fafb] hover:bg-[#d2e6f5]"
              }`}
              onClick={() => {
                setActiveTab("exam");
              }}
            >
              جدول الامتحانات
            </li>
            <li
              className={`text-[#191970] py-1 pr-7 border-b hover:border hover:border-[#6ea7d1] ${
                activeTab === "grades"
                  ? "bg-[#fbec88]"
                  : "bg-[#f9fafb] hover:bg-[#d2e6f5]"
              }`}
              onClick={() => {
                setActiveTab("grades");
              }}
            >
              النتائج الدراسية
            </li>
            <li
              className={`text-[#191970] py-1 pr-7 border-b hover:border hover:border-[#6ea7d1] ${
                activeTab === "data"
                  ? "bg-[#fbec88]"
                  : "bg-[#f9fafb] hover:bg-[#d2e6f5]"
              }`}
              onClick={() => {
                setActiveTab("data");
              }}
            >
              البيانات التعليمية
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          {activeTab === "exam" ? (
            <div className="p-[10px] m-[10px] border border-[#a6c9e2] rounded-md overflow-hidden min-h-screen relative">
              <span className="absolute top-[10px] right-[10px] bg-[#fff] text-red-500 p-3 z-10 rounded-md font-bold">
                جدول الامتحانات
              </span>
              <div className="absolute top-0 right-0 w-full h-[45px] m-1 bg-[#6ea7d1] rounded-md"></div>
              <p className="block text-center my-[80px] mx-auto">
                لايوجد جداول متاحه حاليا
              </p>
            </div>
          ) : activeTab === "data" ? (
            <div className="p-[10px] m-[10px] border border-[#a6c9e2] rounded-md overflow-hidden min-h-screen relative">
              <span className="absolute top-[10px] right-[10px] bg-[#fff] text-red-500 p-3 z-10 rounded-md font-bold">
                البيانات التعليمية
              </span>
              <div className="absolute top-0 right-0 w-full h-[45px] m-1 bg-[#6ea7d1] rounded-md"></div>
              <div className="grid grid-cols-2 max-w-[300px] my-[60px]">
                <div className="flex flex-col font-semibold gap-3 text-base">
                  <span>الفصل</span>
                  <span>المجموعة</span>
                  <span>رقم الجلوس</span>
                  <span>اللجنة</span>
                  <span>مكان اللجنة</span>
                </div>
                <div className="flex flex-col font-semibold gap-3 text-base text-[#2e6e9e]">
                  <span>1</span>
                  <span>1</span>
                  <span>33012</span>
                  <span>لجنة 18</span>
                  <span>E 205 - مبنى الهنجر</span>
                </div>
              </div>
            </div>
          ) : (
            activeTab === "grades" && (
              <div className="p-[10px] m-[10px] border border-[#a6c9e2] rounded-md overflow-hidden min-h-screen relative">
                <span className="absolute top-[10px] right-[10px] bg-[#fff] text-red-500 p-3 z-10 rounded-md font-bold">
                  النتائج الدراسية
                </span>
                <div className="absolute top-0 right-0 w-full h-[45px] m-1 bg-[#6ea7d1] rounded-md"></div>
                <div className="block text-center mt-[60px] mb-2 mx-auto bg-[#fbec88] text-red-500 p-2 font-bold text-[14px] rounded-md border border-[#fad42e]">
                  <span className="text-[#a52a2a]">تنبيه خاص : </span>
                  البيانات المعروضة فى هذه الصفحة لا يُعتد بها كمستند رسمى
                </div>
                <div className="border border-[#a6c9e2] rounded-md">
                  <span className="text-red-500 font-semibold cursor-pointer p-3">
                    ثالثة-قسم الهندسة المدنية-معهد هندسة وتكنولوجيا الطيران
                    بإمبابة – جيزة 2023 - 2024
                  </span>
                  <table className="w-full text-[12px] border border-black font-bold">
                    <tr className="text-center text-base">
                      <th className="bg-[#ddecf7]">المقرر</th>
                      <th className="bg-[#ddecf7]">التقدير</th>
                    </tr>
                    <tr>
                      <td className="p-2">ميكانيكا الإنشاءات(3)</td>
                      <td className="text-center">جيد</td>
                    </tr>
                    <tr>
                      <td className="p-2">الخرسانة المسلحة (2 )</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">المنشآت المعدنية</td>
                      <td className="text-center">جيد جداً</td>
                    </tr>
                    <tr>
                      <td className="p-2">هندسة صحية</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">أساسيات ميكانيكا التربة</td>
                      <td className="text-center">جيد جداً</td>
                    </tr>
                    <tr>
                      <td className="p-2">هندسة هيدروليكية</td>
                      <td className="text-center">جيد</td>
                    </tr>
                    <tr>
                      <td className="p-2">تحليل الإنشاءات(3)</td>
                      <td className="text-center">جيد</td>
                    </tr>
                    <tr>
                      <td className="p-2">الخرسانة المسلحة (3 )</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">تصميم المنشآت المعدنية</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">تصميم منشآت الري(1)</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">تطبيقات ميكانيكا التربة</td>
                      <td className="text-center">جيد</td>
                    </tr>
                    <tr>
                      <td className="p-2">سلوكيات وقانون المهنة</td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">* مقرر إختياري (1)</td>
                      <td className="text-center">جيد</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        تحليل الإنشاءات(2) -{" "}
                        <span className="text-red-500">ثانية</span>
                      </td>
                      <td className="text-center">مقبول</td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        الخرسانة المسلحة (1 ) -{" "}
                        <span className="text-red-500">ثانية</span>
                      </td>
                      <td className="text-center">مقبول</td>
                    </tr>

                    <tr>
                      <td className="p-2.5 text-[13px] font-bold bg-[#ddecf7] flex items-center justify-between border-0">
                        <p>
                          <span className="text-[#2e6e9e]">المجموع : </span>966
                        </p>
                        <p>
                          <span className="text-[#2e6e9e]">التقدير : </span>
                          مقبول
                        </p>
                        <p>
                          <span className="text-[#2e6e9e]">النسبة : </span>64.4
                          %
                        </p>
                      </td>
                      <td className="bg-[#ddecf7] border-0"></td>
                    </tr>
                  </table>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
