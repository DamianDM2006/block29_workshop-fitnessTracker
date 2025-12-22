import { useState } from "react";
import { useAuth } from "../auth/AuthContext";


export default function ActivityList({ activities }) {
  const [selectedActivityId, setSelectedActivityId] = useState();
  console.log(selectedActivityId);
  
  return (
    <ul>
      {activities.map((activity) => (
        <li
          key={activity.id}
          onClick={() => setSelectedActivityId(activity.id) }
          className={activity.id === selectedActivityId ? "selected" : "" }
        >{activity.name}</li>
      ))}
    </ul>
  );
}

const OneActivity = () => {

}
