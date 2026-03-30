type ActivityInput = {
  type: "call" | "email" | "note";
  entityId: string;
  description: string;
};

type Activity = ActivityInput & {
  id: string;
  createdAt: string;
};

let activities: Activity[] = [];

export function addActivity(activity: ActivityInput) {
  const entry: Activity = {
    id: "ACT-" + Date.now(),
    ...activity,
    createdAt: new Date().toISOString(),
  };
  activities.push(entry);
  return entry;
}

export function getActivities() {
  return activities;
}
