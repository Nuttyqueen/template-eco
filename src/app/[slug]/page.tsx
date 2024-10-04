import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import Add from "../components/Add";

const SinglePage = () => {
  return (
    <div className="mt-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Nikon FG</h1>
        <p className="text-gray-600">
          กล้องฟิล์ม Nikon FG เป็นกล้องที่ถูกออกแบบมาเป็น Generation ถัดไป
          มาแทนที่ Nikon EM ซึ่งเป็นกล้องฟิล์ม ในระบบผู้ใช้ทั่วไป
          ถือว่าเป็นกล้องฟิล์มประเภท SLR ที่เล็กที่สุดแล้วใน Line การผลิตของ
          Nikon มีระบบการทำงานที่ครบครันทุกโหมดการใช้งาน มีถึง 3 mode ได้แก่
        </p>
        <ul>
          <li>- Programmed (เป็นระบบออโต้ ที่ชาญฉลาด)</li>
          <li>
            - Aperture Priority (ผู้ใช้ปรับแค่รูรับแสง
            กล้องจะเป็นผู้เลือสปีดชัตเตอร์ที่เหมาะสมให้)
          </li>
          <li>
            - Full Manual exposure (ผู้ใช้ปรับเองทั้งรูรับแสง และ สปีดชัตเตอร)
          </li>
        </ul>
        <div className="h-[2px] bg-neutral-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">฿45,900</h3>
          <h3 className="font-medium text-2xl">฿40,900</h3>
        </div>
        <div className="h-[2px] bg-neutral-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-neutral-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">ฟังก์ชั่น</h4>
          <p>
            Nikon FG มีฟังก์ชั่นหลายๆ อย่าง เหมือน Nikon FE2 เลย
            เพียงแต่อยู่ในบอดี้ที่เล็ก กระทัดรัดกว่า
            ตัวกล้องความเร็วสปีดชัตเตอร์ ของกล้องฟิล์ม Nikon FG สูงสุดถึง 1/1000
            วินาที มีเสียงเตือน เมื่อสปีดชัตเตอร์ช้า เพื่อให้
            ผู้ใช้ระวังความสั่นไหว ที่มาจากการใช้ชัตเตอร์นานๆ
            ซึ่งสามารถปิดได้จากสวิทต์ด้านบนของตัวกล้อง นอกจากนั้น
            ยังเป็นรุ่นที่รองรับอุปกรณ์เสริมอื่นๆ ได้เหมือนกล้องฟิล์ม Nikon
            รุ่นอื่นอีกด้วย อาทิเช่น Motor Drive
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">ข้อมูลสเปคพื้นฐาน</h4>
          <ul>
            <li>ผู้ผลิต: Nippon Kogaku K. K.</li>
            <li>ประเภทกล้อง : Single lens reflex</li>
            <li>Lens ที่ใช้ได้ : Nikon F-mount</li>
            <li>ฟอร์แมต Film : 35mm</li>
            <li>ขนาดฟิล์ม size 36mm x 24mm</li>
            <li>Exposure modes : Program, Aperture priority, Manual</li>
            <li>ระบบวัดแสง : silicon photodiode light meter, TTL metering</li>
            <li>โหมดการวัดแสง : 60/40 percent center-weighted</li>
            <li>ระบบ Shutter : electronically controlled เป็นไฟฟ้า</li>
            <li>
              ช่วงความเร็ว: Shutter speed r 1s – 1/1000s (P, A, M); M90 (1/90s);
              Bulb (B)
            </li>
            <li>Battery ที่ใช้ : S76 , A76, LR44 หรือ 1/3N</li>
            <li>ขนาดกล้องฟิล์ม : 139 x 86 x 53 mm</li>
            <li>น้ำหนัก : 490g</li>
            <li>ผลิตเมื่อ : 1982</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
