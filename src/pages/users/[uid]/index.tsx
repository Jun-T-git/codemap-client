import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserDetailRequest } from "~/lib/api/users";
import { User } from "~/lib/types/user";
import { Review } from "~/lib/types/review";

const Post = () => {
  const initialUser: User = {
    id: "",
    name: "",
    image: "",
    email: "",
    created_at: "",
    updated_at: "",
  };

  const [user, setUser] = useState<User>(initialUser);
  const [reviews, setReviews] = useState<Array<Review>>([]);
  const router = useRouter();
  const query = router.query;
  const uid = query.uid ? String(query.uid) : "";

  useEffect(() => {
    (async () => {
      if (uid) {
        await fetchUser();
      }
    })();
  }, [uid]);

  const fetchUser = async () => {
    try {
      const response = await getUserDetailRequest(uid);
      console.log(response);
      const userData = response.data.data;
      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white border rounded min-h-[15rem] p-5 flex space-x-10">
      <Image
        src={user.image ? user.image : "/favicon.ico"}
        alt="avatar"
        width={250}
        height={250}
        className="rounded-full object-cover bg-red-200"
      />
      <div>
        <h2 className={"text-xl font-bold"}>{user.name}</h2>
        <p className="text-base my-1">メールアドレス：{user.email}</p>
      </div>
    </div>
  );
};

export default Post;
