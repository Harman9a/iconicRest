import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Users.css";
import axios from "axios";
import UersCard from "./UsersCard";
import SkeletonUserCard from "./SkeletonUserCard";

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!isLoading ? (
          users.map((x) => {
            let { id, username, name, email } = x;
            return (
              <UersCard
                key={id}
                username={username}
                user_name={name}
                user_email={email}
              />
            );
          })
        ) : (
          <SkeletonUserCard />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Users;
