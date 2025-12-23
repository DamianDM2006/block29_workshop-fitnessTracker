import { useState } from "react";
import { useAuth } from "../auth/AuthContext";


export default function ActivityList({ activities, syncActivities }) {
  const [selectedActivityId, setSelectedActivityId] = useState();
  console.log(selectedActivityId);
  
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityLi 
          key={activity.id}
          activity={activity}
          syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}


const ActivityLi = ({activity, syncActivities }) => {
 const { token } = useAuth();
 const [error, setError] = useState(null);

 const tryDelete = async () => {
  try {
    await deleteActivity(token, activity.id);
    synActivities();
  } catch (e) {
    setError(e.message);
  }
 };

 return (
  <li>
    <p>{activity.name}</p>
    {token && <button onClick={tryDelete}>Delete</button>}
    {error && <p role="alert">{error}</p>}
  </li>
 );
}