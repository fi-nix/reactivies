import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/modules/activity";
import ActivityDetail from "../details/ActitvityDetail";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    upsert: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean
}

export default function ActivityDashboard({
    activities,
    selectedActivity,
    selectActivity,
    cancelSelectActivity,
    editMode,
    openForm,
    closeForm,
    upsert, 
    deleteActivity,
    submitting,
}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity} 
                deleteActivity={deleteActivity}
                submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />}
                {editMode &&
                    <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity} 
                    upsert={upsert}
                    submitting={submitting}
                    />}
            </Grid.Column>
        </Grid>
    )
}