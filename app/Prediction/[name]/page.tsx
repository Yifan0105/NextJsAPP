// fetch() 发送 GET 请求，等待服务器返回数据。
const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
  };
  
  const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
  };
  
  interface Params {
    params: { name: string };
  }
  
  export default async function Page({ params }: Params) {
    // 发送 API 请求
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);
  
    // 并行请求，等待所有数据返回
    const [age, gender, country] = await Promise.all([
      ageData,
      genderData,
      countryData,
    ]);
  
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
            Personal Info
          </h1>
          <div className="space-y-3 text-lg text-gray-700">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              <span className="text-blue-600">{params.name}</span>
            </p>
            <p>
              <span className="font-semibold">Age:</span>{" "}
              {age?.age !== undefined ? age.age : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {gender?.gender ? gender.gender : "N/A"}
            </p>
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {country?.country?.length > 0
                ? country.country[0].country_id
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    );
  }
  