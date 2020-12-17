import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface UsersProps {
  username: string;
  user_name: string;
  user_email: string;
}

const UersCard: React.FC<UsersProps> = ({
  username,
  user_name,
  user_email,
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>{username}</IonCardSubtitle>
        <IonCardTitle>{user_name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>{user_email}</IonCardContent>
    </IonCard>
  );
};

export default UersCard;
