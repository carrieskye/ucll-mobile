import React from 'react';
import { StyleSheet, Text, View,Button,Alert,TouchableHighlight, Component} from 'react-native';
const util = require("util");

export function createExpenseJSON(expenceId, personId, targetId, tripId, value, currency, date, category, reason)
{
    return JSON.parse(`{"expence_id": expenceId,
                        "person_id": personId,
                        "target_id": targetId,
                        "trip_id": tripId,
                        "value": value,
                        "currency": currency,
                        "date": date,
                        "category": category,
                        "reason": reason}`)
}

export function createPersonJSON(personId, firstName, lastName)
{
    return JSON.parse(`{"person_id": personId,
                        "first_name": firstName,
                        "last_name": lastName}`)
}

export function CreatePaymentJSON(trip_id, payer, receiver, date, currency)
{
	return JSON.parse(`{"trip_id": trip_id,
	                    "payer": payer,
	                    "receiver": receiver,
	                    "date": date,
	                    "currency": currency`);
}

export function CreateTripJSON(trip_id, destination, startDate, endDate)
{
	return JSON.parse(`{"trip_id": trip_id,
	                "destination": destination,
	                "start_date": startDate,
	                "end_date": endDate`);
}

export function CreateDebtJSON(donorId, receiverId, tripId, value, currency)
{
	return JSON.parse(`{"donor_id": donorId,
	                "receiver_id": receiverId,
	                "trip_id": tripId,
	                "value": value,
	                "currency": currency`);
}

export