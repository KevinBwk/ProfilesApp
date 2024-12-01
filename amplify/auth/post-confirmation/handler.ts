import { events } from 'aws-amplify/api';
import type { PostConfirmationTriggerHandler } from 'aws-lambda';

export const handler: PostConfirmationTriggerHandler = async(event)=>{
    return event;
};