import React, { useEffect, useState } from "react";
import User from "../User/User";
import { getAllUser } from "../../api/UserApi";

const FollowersCard = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPerson();
  }, []);

  console.log(persons);
  return (
    <div className="w-full rounded-xl flex gap-4 flex-col text-sm">
      <h3 className="font-bold text-xl">People you may know</h3>
      {persons.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
