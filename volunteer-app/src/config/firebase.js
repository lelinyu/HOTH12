// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkv2_hdzvrvfKJabPABcy4P28yYwhQLaQ",
  authDomain: "hoth12.firebaseapp.com",
  projectId: "hoth12",
  storageBucket: "hoth12.firebasestorage.app",
  messagingSenderId: "545322909203",
  appId: "1:545322909203:web:1c327a15289b984a7949e6",
  measurementId: "G-T9WEPQ8N59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

/**
 * Create (Write) a new event in Firestore.
 * This function sets a document in the "events" collection with the provided eventID.
 */
async function createEvent(eventID, eventName, organizerName, description, date, location, picture) {
  try {
    await setDoc(doc(db, "Opportunities", eventID), {
      name: eventName,
      organizer: organizerName,
      description: description,
      date: date,
      location: location,
      picture: picture
    });
    console.log("Event created successfully.");
  } catch (error) {
    console.error("Error creating event:", error);
  }
}

/**
 * Read an event's data from Firestore.
 * This function retrieves the document from the "events" collection with the provided eventId.
 */
async function readEvent(eventId) {
  try {
    const eventRef = doc(db, "Opportunities", eventId);
    const docSnap = await getDoc(eventRef);
    if (docSnap.exists()) {
      console.log("Event data:", docSnap.data());
    } else {
      console.log("No data available for event:", eventId);
    }
  } catch (error) {
    console.error("Error reading event:", error);
  }
}

/**
 * Update an event's data in Firestore.
 * This function updates specific fields of the event document without overwriting the entire document.
 */
async function updateEvent(eventId, updates) {
  try {
    const eventRef = doc(db, "Opportunities", eventId);
    await updateDoc(eventRef, updates);
    console.log("Event updated successfully.");
  } catch (error) {
    console.error("Error updating event:", error);
  }
}

/**
 * Delete an event from Firestore.
 * This function deletes the event document with the specified eventId from the "events" collection.
 */
async function deleteEvent(eventId) {
  try {
    const eventRef = doc(db, "Opportunities", eventId);
    await deleteDoc(eventRef);
    console.log("Event deleted successfully.");
  } catch (error) {
    console.error("Error deleting event:", error);
  }
}

// Create 5 example usage
deleteEvent("event3");
createEvent("event1", "Community Cleanup", "Green Team", "Help clean up the local park", "2022-01-15", "Central Park", "cleanup.jpg");
createEvent("event2", "Food Drive", "Food Bank", "Collect canned goods for the homeless shelter", "2022-02-20", "Downtown Plaza", "fooddrive.jpg");
createEvent("event3", "Blood Drive", "Red Cross", "Donate blood to save lives", "2022-03-25", "City Hospital", "blooddrive.jpg");
createEvent("event4", "Animal Shelter Volunteer", "Paws & Claws", "Walk dogs and play with cats at the shelter", "2022-04-30", "Pet Haven", "animalshelter.jpg");
createEvent("event5", "Senior Center Visit", "Golden Years Home", "Spend time with elderly residents", "2022-05-31", "Sunset Village", "seniorcenter.jpg");


// Read the 5 events
readEvent("event1");
readEvent("event2");
readEvent("event3");
readEvent("event4");
readEvent("event5");

