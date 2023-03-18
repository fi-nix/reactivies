import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, ItemExtra, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";


export default observer(function ActivityList() {

    const [target, setTarget] = useState('');

    const { activityStore } = useStore();

    const { deleteActivity, ActivitiesByDate, loading } = activityStore;

    function handleDeleteActivity(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }


    return (
        <Segment>
            <Item.Group divided>
                {ActivitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <ItemExtra>
                                <Button
                                    as={Link} to={`/activities/${activity.id}`}
                                    floated="right"
                                    content='View'
                                    color="blue"
                                />
                                <Button
                                    name={activity.id}
                                    loading={loading && target === activity.id}
                                    onClick={(e) => handleDeleteActivity(e, activity.id)}
                                    floated="right"
                                    content='Delete'
                                    color="red"
                                />
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    );
});