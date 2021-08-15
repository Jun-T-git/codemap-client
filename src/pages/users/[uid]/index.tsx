import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Review } from "~/lib/types/review";
import { userInfoState } from "~/recoil/userInfo";

const Post = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [image, setImage] = useState<string>("");
  // const [reviews, setReviews] = useState<Array<Review>>([]);
  const router = useRouter();
  // const query = router.query;
  // const uid = query.uid ? String(query.uid) : "";

  // useEffect(() => {
  //   (async () => {
  //     if (uid) {
  //       await fetchUser();
  //     }
  //   })();
  // }, [uid]);

  const processImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
  };

  return (
    <div className="bg-white border rounded min-h-[15rem] p-5 flex space-x-10">
      <label className="w-52 h-52 rounded-full">
        <img
          src={
            userInfo.profile.image ? userInfo.profile.image : "/userNoImage.png"
          }
          alt="avatar"
          className="w-52 h-52 rounded-full object-cover border"
        />
        <input
          type="file"
          accept="image/*"
          onChange={processImage}
          className="hidden"
        />
      </label>
      <div>
        <h2 className={"text-xl font-bold"}>{userInfo.profile.name}</h2>
        <p className="text-base my-1">
          メールアドレス：{userInfo.profile.email}
        </p>
      </div>
    </div>
  );
};

export default Post;
