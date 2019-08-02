React App:

a user can:
    - sign up
    - login
    - logout
    - create channels
    - view one chat (channel) at a time
    - be invited to a channel
    - invite others to any channel they are active(?) in
    - write messages
    - search a list of movies and show  
    - can save a show or movie as a favorites
    - can create a channel based on search results 
    - write a review
      - no reviews no spoilers
    - rate an episode when you mark watched 
    - mute channel?
    - unmute channel?
    - leave a chat and see old history in archive

a channel can:
    - display its messages 
    - display its topic
    - send messages
    - get all messages in its history
    - notifications?
    - mute its notifications


actions
  - essentially every user click 
  - determine query actions 
  - actual functions that are executed

reducers
  - switch case statements
  - action controllers 


NAME IDEAS

 - WaitChat
 - Spoiler Alerts
 - Silhouette
 - Scarlet Letters
 - Reveal
 - Not Yet
 - Parley
 - ConferLater
 - Shroud
 - Reveal
 - YapTrap
 - GabTrap
 - ZipIt
 - Till Later
 - Shush
 - Hush

NotSilHushLetShrEal

REACT_APP

SRC
 - actions (axios calls to URLs)
   - authActions 
     > signin
     > signout
     > signup
     > reset password
     > delete account

   - dbActions
     > create message by channel
     > create channel by user id
     > create user by signup
     > create rating by message
      ------------------------
     > find users by channel
     > find channels by user
     > find public channels by privacy state
     > find messages by channel
     > find ratings by channel
     > find ratings by user
      ------------------------
     > update message by message id
     > delete message by message id
     > delete user by user id (inactivating)

   - apiActions (TV and Movie APIs)
     > find all tv shows for trie
     > find all movies for trie
     > find one tv show by name for create channel
     > find one movie by name for create channel
     
 - components
   - Grid (containers, rows, columns)
     > return grid system with children
   - Friends Search (trieSearch on friends list with autocomplete)
     > return search bar with loaded trie
   - Media Search (trieSearch on tv shows and movies lists with autocomplete)
     > return search bar with loaded trie
   - Navbar 
     > route HomePage, Dashboard, Profile, Create New Channel
     > <Link to='/home'> Home </Link>
   - ChatArea
     > return textarea to append messages
   - MessageText
     > return input field with submit and clear buttons
   - PrivateChannels
     > return matrix of private channels
   - Public Channels
     > return list of public channels
   - TvShows
     > return info box with api data
   - Movies
     > return info box with api data
   - UserInfo
     > return info box with user profile data
   - FriendComparison
     > return table with rating comparisons with friend

 - containers
   - Signin
   - Signup
   - Signout
   - Channel (ChatLog, TextArea)
   - Explorer (TvShows, Movies)

 - pages
   - Dashboard (PrivateChannels, PublicChannels)
   - Profile (UserInfo, PublicChannels, FriendComparison)
   - HomePage (PublicChannels)

 - hoc
   - requireAuth (block routes unless authorized)

 - reducers
   - index
     > exports all reducers
   - auth
     > switch auth actions
   - db
     > switch db actions
   - api
     > switch api actions

ROOT
 - controllers
    - authController 
     > signin
     > signout
     > signup
     > reset password
     > delete account

   - dbController
     > create message by channel
     > create channel by user id
     > create user by signup
     > create rating by message
      ------------------------
     > find users by channel
     > find channels by user
     > find public channels by privacy state
     > find messages by channel
     > find ratings by channel
     > find ratings by user
      ------------------------
     > update message by message id
     > delete message by message id
     > delete user by user id (inactivating)

   - apiController (TV and Movie APIs)
     > find all tv shows for trie
     > find all movies for trie
     > find one tv show by name for create channel
     > find one movie by name for create channel

 - models
   - dbModels
     - Users
       {
        _id: Object ID, 
        name: String, 
        active_channels: [ 
          { 
            muted: Boolean, 
            channel_id: ref channel._id 
          } 
        ],
        invited_channels: ref [channels._id],
        favorites_shows: [{}, {}],
        messages: ref [messages._id],
        starred_messages: ref [messages._id],
        friends: ref [userss._id]
       }

     - Channels
       {
        _id: Object ID,
        topic: String, 
        admin_id: ref [user._id],
        open_invite: Boolean,
        messages: ref [messages._id]
       }

     - Messages
       {
        _id: Object ID,
        author: ref [users._id], 
        channel: ref [channel._id], 
        content: String, 
        likes: Number
        user_likes: ref [users_id]
       }

     - Ratings
       {
        _id: Object ID,
        author: ref [user._id], 
        showOrMovie, 
        summary, 
        rating, 
        channel: ref [channel._id] 
       }

 - routes
   - index

     - apiRoutes
       -index

        - dbRoutes
          (get all routes)
          > /db/newuser
          > /db/newchannel
          > /db/newmessage
          > /db/newrating
          > /db/editmessage
          > /db/deletemessage
          > /db/deleteuser
          ----------------
          (get one routes)
          > /db/allchannels
          > /db/allmessages
          > /db/allratings
          > /db/allusers

        - movieRoutes
          > /api/movies
          > /api/findmedia

        - showRoutes
          > /api/shows
          > /api/findmedia

        - authRoutes
          > /auth/signin
          > /auth/signout
          > /auth/signup
          > /auth/reset
          > /auth/delete

 - middlewares
   - auth  // require passport middleware   

 - services
   - passport.js  // authentication





RESOURCES

- https://www.themoviedb.org/documentation/api
    -response Obj
    -API mapping 



IDEA BANK

- get list of channels user is active in: user.active_channels

- get all channel messages: message where channel._id === targetChannel
    { label: "channel_0037", content: { text, author, ipaddress} }
    socket.listen("channel_02")
    socket.listen("channel_007")

- reveal chat history by episode watched, filter by Date
    history scope by current season 

- show explorer (
  show anonymous user reviews of shows
)

channels when muted show number of messages in hidden history 

trending section: shows most popular in each genre

friend comparison: can compare ratings of content you've both seen and get a percentage compatibility match

make daily server calls to get api data and populate tries with movie and show titles

user time zone vs official air date and time

Merging Oath and Socket:
  - does middleware run in mongoose.connect?
  - do we require user login verification in socket connection?
  - does socket maintain live connection through routes?

COOKIES

  require "cookie-parser"   // server file
  app.use(cookieParser(process.env.SECRET))   // server file
  res.cookie("name", object, cookieOptions)   // clients-side
  cookieOptions = {
    httpOnly: true,
    signed: true,
    maxAge: (1000 * 60) ^ 60,
    expiresIn: new Date(Date.now() + 90000)
  }


