const getActivity = async (req, res) => {
    const activity = [
        {
            destination: 'Paris',
            activitySpot: 'Louvre Museum',
            rating: '4',
            review: 'Visiting the Louvre was an unforgettable experience!'
        }
    ];

    res.status(200).json(activity);
}

const postActivity = async (req, res) => {
    /*
    This controller should retrieve the activity object from the request body (req.body.activity).
    Check for the following properties: destination, activitySpot,rating.
    See if destination, activitySpot, and rating exist.
    If not, send an error response back to the client.
    Otherwise, send a success response back to the client.
    Return a JSON object containing the activity data.
    */
}

module.exports = { getActivity, postActivity };