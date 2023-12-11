/* eslint-disable no-unused-vars */
import Post from "../post/Post";

const Content = () => {
  const demo1 =
    "https://previews.123rf.com/images/ksuperksu/ksuperksu1507/ksuperksu150700065/43127786-blue-flat-style-square-shaped-female-character-icon-with-shadow-illustration-of-an-attractive-asian.jpg";

  let arr = [
    {
      name: "test test",
      url: "data:image/jpeg;base64,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",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
    {
      name: "Laxmi DUtta",
      url: "data:image/jpeg;base64,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",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
    {
      name: "Naruto",
      url: "https://png.pngtree.com/background/20210710/original/pngtree-blue-big-data-financial-management-banner-picture-image_1016088.jpg",
      para: "The Sanskrit term Shiv is absolutely mind-blowing! It radiates benevolence and auspiciousness like no other",
      profile: demo1,
    },
  ];

  return (
    <div className="bg-white rounded-md w-full">
      {/* contentbar */}
      <div className="w-full flex gap-7 md:gap-24 py-3 border-b border-gray-300 px-5 text-sm font-bold text-zinc-500">
        <h3 className="hover:text-slate-950 cursor-pointer">About</h3>
        <h3 className="hover:text-slate-950 cursor-pointer">
          Skills & Certificate
        </h3>
        <h3 className="hover:text-slate-950 cursor-pointer">Posts</h3>
        <h3 className="hover:text-slate-950 cursor-pointer">Spaces</h3>
      </div>
      {/* content */}
      <div className="px-5 pt-4">
        {arr.map((ele, index) => {
          return (
            <Post
              key={index}
              name={ele.name}
              url={ele.url}
              para={ele.para}
              profile={ele.profile}
            />
          );
        })}

        <Post />
      </div>
    </div>
  );
};

export default Content;
