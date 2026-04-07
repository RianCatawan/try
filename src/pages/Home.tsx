import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonModal, IonButtons } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Akoang mobayl ap</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
       
        <ExploreContainer />

      </IonContent>
    </IonPage>
  );
};

export default Home;
