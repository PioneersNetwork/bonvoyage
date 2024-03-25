import DashboardLayout from "@/layout/dashboardLayout";
import Editor from "@/layout/ui/editor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSession, signOut } from "next-auth/react";

import { toBase64 } from "@/utils/base64";
import toast from "react-hot-toast";

let window=null;
export default function Home({ id }) {
  const { data: session, status } = useSession();
  const route = useRouter();
  id = route.query["id"];

  const [data1, setData1] = useState(null);
  const [titleEn, setTitleEn] = useState(null);
  const [titleAr, setTitleAr] = useState(null);
  const [DescriptionEn, setDescriptionEn] = useState(null);
  const [DescriptionAr, setDescriptionAr] = useState(null);

  const [AmenitiesEn, setAmenitiesEn] = useState(null);
  const [AmenitiesAr, setAmenitiesAr] = useState(null);
  const [Buy, setBuy] = useState(null);
  const [Sell, setSell] = useState(null);
  const [Rent, setRent] = useState(null);

  const [jan, setjan] = useState(null);
  const [feb, setfeb] = useState(null);
  const [mar, setmar] = useState(null);
  const [apr, setapr] = useState(null);
  const [may, setmay] = useState(null);
  const [jun, setjun] = useState(null);
  const [jul, setjul] = useState(null);
  const [aug, setaug] = useState(null);
  const [sep, setsep] = useState(null);
  const [oct, setoct] = useState(null);
  const [nov, setnov] = useState(null);
  const [decm, setdecm] = useState(null);
  const [calendar,setCalendar]=useState();
  const [image, setImage] = useState();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    window= document.window;
    getData1(id).then((val) => {
      setData1(val.club[0]);
      setTitleEn(val.club[0].title.en);
      setTitleAr(val.club[0].title.ar);
      setDescriptionEn(val.club[0].description.en);
      setDescriptionAr(val.club[0].description.ar);
      setAmenitiesEn(val.club[0].amenities.en);
      setAmenitiesAr(val.club[0].amenities.ar);
      setBuy(val.club[0].buy);
      setSell(val.club[0].sell);
      setRent(val.club[0].rent);

      setjan(val.club[0].jan);
      setfeb(val.club[0].feb);
      setmar(val.club[0].mar);
      setapr(val.club[0].apr);
      setmay(val.club[0].may);
      setjun(val.club[0].jun);
      setjul(val.club[0].jul);
      setaug(val.club[0].aug);
      setsep(val.club[0].sep);
      setoct(val.club[0].oct);
      setnov(val.club[0].nov);
      setdecm(val.club[0].decm);
      setCalendar(val.club[0].calendar);
    });
  }, [id]);

  const handleSub = async (e) => {
    e.preventDefault();

    let image_name = null;
    if (image) {
      image_name = Date.now() + "." + image.name.split(".").at(-1);
    }
    let ob = {
      ...data1,
      title: { en: titleEn, ar: titleAr },
      description: { en: DescriptionEn, ar: DescriptionAr },
      amenities: { en: AmenitiesEn, ar: AmenitiesAr },
      buy: Buy,
      sell: Sell,
      rent: Rent,
      jan: jan,
      feb: feb,
      mar: mar,
      apr: apr,
      may: may,
      jun: jun,
      jul: jul,
      aug: aug,
      sep: sep,
      oct: oct,
      nov: nov,
      decm: decm,
    };
    if (image) {
      ob.logo = image_name;
    }
    let base = null;
    if (image) base = await toBase64(image);
    let arr = [
      await fetch("/api/clubs/store", {
        method: "POST",
        body: JSON.stringify(ob),
      }),
    ];
    if (image) {
      arr.push(
        await fetch("http://localhost:8000/api/images/upload", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            image: base,
            image_name: image_name,
            path: "images",
          }),
        })
      );
    }
    Promise.all(arr).then(() => {
      toast.success("updated in successfully!");
    });
  };

  if (!data1) {
    return <></>;
  }
  if (!session && window!=null) window.location.href = "/dashboard";
  if (session && status != "loading")
    return (
      <div className=" pt-8  px-[16px] lg:px-32">
        <div className="border-main border-2 p-4 rounded-md  bg-opacity-5 bg-main">
          <input
            type="file"
            onChange={(val) => {
              console.log(val.target.files[0]);
              setImage(val.target.files[0]);
            }}
          />
          <div className="flex flex-wrap ">
            <div className=" p-4 w-full lg:w-1/3">
              <img
                src={"/images/" + data1.logo}
                className="w-full h[300px] object-cover object-center"
              />
            </div>
            <div className=" p-4 w-full lg:w-1/3">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  className="w-full h[300px] object-cover object-center"
                />
              ) : null}
            </div>

            <div className="w-1/2 p-2">
              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="english name"
                required
                value={titleEn}
                onChange={(val) => {
                  setTitleEn(val.target.value);
                }}
              />
            </div>
            <div className="w-1/2 p-2">
              <input
                className="w-full p-2 rounded-md my-2 px-4 border-[#ccc] border-[1px]  focus-visible:border-main focus-visible:border-[1px]"
                type="text"
                name="name"
                placeholder="arabic name"
                required
                value={titleAr}
                onChange={(val) => {
                  setTitleAr(val.target.value);
                }}
              />
            </div>

            <div className="w-1/2 p-2">
              <div>description En :</div>
              <Editor content={DescriptionEn} setContent={setDescriptionEn} />
            </div>
            <div className="w-1/2 p-2">
              <div>description Ar :</div>
              <Editor content={DescriptionAr} setContent={setDescriptionAr} />
            </div>
            <div className="w-1/2 p-2">
              <div>Amenities En :</div>
              <Editor content={AmenitiesEn} setContent={setAmenitiesEn} />
            </div>
            <div className="w-1/2 p-2">
              <div>Amenities Ar :</div>
              <Editor content={AmenitiesAr} setContent={setAmenitiesAr} />
            </div>
            <div className="w-1/2 p-2">
              <div>Buy</div>
              <Editor content={Buy} setContent={setBuy} />
            </div>
            <div className="w-1/2 p-2">
              <div>Sell</div>
              <Editor content={Sell} setContent={setSell} />
            </div>
            <div className="w-1/2 p-2">
              <div>Rent</div>
              <Editor content={Rent} setContent={setRent} />
            </div>

            <div className="w-1/2 p-2">
              <div>jan</div>
              <Editor content={jan} setContent={setjan} />
            </div>
            <div className="w-1/2 p-2">
              <div>feb</div>
              <Editor content={feb} setContent={setfeb} />
            </div>
            <div className="w-1/2 p-2">
              <div>mar</div>
              <Editor content={mar} setContent={setmar} />
            </div>
            <div className="w-1/2 p-2">
              <div>apr</div>
              <Editor content={apr} setContent={setapr} />
            </div>
            <div className="w-1/2 p-2">
              <div>may</div>
              <Editor content={may} setContent={setmay} />
            </div>
            <div className="w-1/2 p-2">
              <div>jun</div>
              <Editor content={jun} setContent={setjun} />
            </div>
            <div className="w-1/2 p-2">
              <div>jul</div>
              <Editor content={jul} setContent={setjul} />
            </div>
            <div className="w-1/2 p-2">
              <div>aug</div>
              <Editor content={aug} setContent={setaug} />
            </div>
            <div className="w-1/2 p-2">
              <div>sep</div>
              <Editor content={sep} setContent={setsep} />
            </div>
            <div className="w-1/2 p-2">
              <div>oct</div>
              <Editor content={oct} setContent={setoct} />
            </div>
            <div className="w-1/2 p-2">
              <div>nov</div>
              <Editor content={nov} setContent={setnov} />
            </div>
            <div className="w-1/2 p-2">
              <div>decm</div>
              <Editor content={decm} setContent={setdecm} />
            </div>
          </div>
          <button
            onClick={handleSub}
            className=" text-white p-3 px-5 rounded-lg  bg-main"
          >
            {"Save"}
          </button>
        </div>
      </div>
    );
}

async function getData1(id) {
  const res = await fetch("/api/clubs/" + id);
  return await res.json();
}

Home.getInitialProps = async ({ query: { id } }) => {
  return { id: id };
};

Home.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
