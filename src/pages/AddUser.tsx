import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./AddUser.css";

interface AddonsProps {
  Addons: Function;
}

const Tab2: React.FC<AddonsProps> = (props) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();

  const handleSubmit = () => {
    props.Addons(name);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="con">
        <IonItem className="input">
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem className="input">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem className="input">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonButton
          color="primary"
          expand="block"
          className="button"
          onClick={() => handleSubmit()}
        >
          Add User
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
