const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Import your event service
const eventService = require('./src/services/eventService');

// Routes
app.get('/events', async (req, res) => {
  try {
    const events = await eventService.listEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/events/:id', async (req, res) => {
  try {
    const event = await eventService.getEvent(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/events', async (req, res) => {
  try {
    const eventId = await eventService.createEvent(req.body);
    res.status(201).json({ id: eventId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/events/:id', async (req, res) => {
  try {
    await eventService.updateEvent(req.params.id, req.body);
    res.json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/events/:id', async (req, res) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
