import { useRouter } from "next/router";

const createUpdateHobby = () => {
  const router = useRouter();
  const params = router.query.hobby;
  return (
    <div>
      <h1>Create / Update {params}</h1>
    </div>
  );
};

export default createUpdateHobby;
