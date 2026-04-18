import { useEffect, useState } from "react";
import { api } from "../../api/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/user/profile")
      .then(res => setProfile(res.data));
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
}