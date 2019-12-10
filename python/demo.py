import firebase_admin
from firebase_admin import db
from firebase_admin import credentials

# Initialize the app with a service account, granting admin privileges
cred = credentials.Certificate("cad-demo.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://cad-demo.firebaseio.com'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules
def listener(event):
    print(event.event_type)  # can be 'put' or 'patch'
    print(event.path)  # relative to the reference, it seems
    print(event.data)  # new data at /reference/event.path. None if deleted

firebase_admin.db.reference('lista').listen(listener)
