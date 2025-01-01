The solution involves using promises or async/await to handle the asynchronous nature of Firebase data retrieval.  Here's how you can modify your code:

```javascript
// Using promises
db.collection('yourCollection').doc('yourDoc').get()
.then(snapshot => {
  if (snapshot.exists) {
    const data = snapshot.data();
    console.log(data.someProperty);
  } else {
    console.log('Document does not exist');
  }
})
.catch(error => {
  console.error('Error getting document:', error);
});

// Using async/await
async function getData() {
  try {
    const snapshot = await db.collection('yourCollection').doc('yourDoc').get();
    if (snapshot.exists) {
      const data = snapshot.data();
      console.log(data.someProperty);
    } else {
      console.log('Document does not exist');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
getData();
```
This ensures the code waits for the data to be loaded before attempting to access it, preventing the error.