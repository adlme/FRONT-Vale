# Vale! 2.0

<br>

## Description

With Vale! you will never feel lonely or bored again. Inside Vale!, you'll find extraordinary plans created and rated by users like you. From walking your neighbour's dog to driving the route 66 with a newly made friend. Lonely? Bored? Ya Vale!

## User Stories

- **ERROR.404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **ERROR.500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **SIGNUP** - As a user I want to be able to sign up so that I can access all the features of the app
- **PROFILE.photo** - As a user I want to be able to upload an avatar so that the profile page is more personalized
- **LOGOUT** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **PROFILE.read** - As a user I want to be able to view my profile details so that I can see everything is correct
- **PROFILE.update** - As a user I want to be able to modify my profile details so that I can fix any errors
- **PROFILE.attending** - As a user I want to be able to see the plans I'm attending so that I can remind myself
- **PROFILE.attending.cancel** - As a user I want to be able to cancel the plans I don't want to attend anymore so that I can let the organizer know
- **PROFILE.created** - As a user I want to be able to see the plans I have created so that I can see attendees' information or cancel the plan
- **LOGIN** - As a user if i created an account already I want to be able to login to access all the features
- **PLANS.read** - As a user i want to view all plans that have been created so that I can find plans that interest me
- **PLANS.detail** - As a user I want to view the detail page of the plan that grabbed my attention so that i can know more info about the plan
- **PLANS.join** - As a user I want to be able to join the plan that interests me so that I can take part in it
- **PLANS.upcoming** - As a user I want to be able to access the upcoming plans page so that I can remind myself
- **PLANS.upcoming.cancel** - As a user I want to be able to cancel the plans I don't want to attend anymore so that I can let the organizer know
- **PLANS.create** -  As a user I want to be able to create a new plan and fill the details so that other user see the plan and can access it
- **PLANS.edit** -  As a user I want to be able to edit the plans that I have created
- **PLANS.advert** -  As a user I want to be able to see one advertised plan per day on top of all plans
- **USERS.view** - As a user I want to be able to view all USERS inside the app
- **USERS.detail** - As a user I want to be able to view the details of another USER
- **MENU** - As a user I want to be able to open a menu so that I can access the main features I need

## Backlog

List of other features outside of the MVPs scope

Distance from:
- As a user I want to be able to view all USERS inside the app, organized by distance

Onboarding:
- Submit photo of your ID so that your profile gets verified

Chats:
- As a user I want to be able to chat with whomever I want
- Send request to chat first instead of being allowed to chat straigth away
- After being accepted into a plan, access a chat room will all the plan attendees

Discounted Plans:
- Create a section with advertised plans, where companies can advertise their businesses through cool plans (discounts, closed menus, special perks, etc.)

Payment:
- Create a fake (for now) payment service so that users can pay for the advertised plans

Staff Page:
- Show the app for staff where they validate the user details with the photo of the ID

Business Page:
- Create the app for businesses so that they can login to their own special app to be able to:
- Create an ad
- Bid for the advertised plan of the day
- Be notified in case someone paid for an advertised plan
- Know more about the users that came into the plan

Desktop website:
- Create a desktop website



<br>


# Client / Frontend

## Routes
| Path                          | Component            | Permissions  | Behavior                                                      |
| ----------------------------- | -------------------- | -----------  | ------------------------------------------------------------  |
| `/`                           | HomePage             | public       | Home page                                                     |
| `/auth/signup`                | AuthSignupPage       | anon only    | Signup form, link to login, navigate to homepage after signup |
| `/auth/login`                 | AuthLoginPage        | anon only    | Login form, link to signup, navigate to homepage after login  |
| `/auth/logout`                | n/a                  | anon only    | Navigate to homepage after logout, expire session             |
| `/plans`                      | PlansPage            | anon || user | Shows the list of all the plans available                     |
| `/plans/create-plan`          | PlansCreatePage      | user only    | Shows the form to create a plan                               |
| `/plans/:id`                  | PlansDetailPage      | anon || user | Shows the details of the plan selected. If you created the plan you can delete it. If you joined it you can cancel. You can also join the plan if you are interested. You can only join the plan if you have completed the full onboarding |
| `/plans/edit/:id`             | PlansEditPage        | creator only | Shows the form to edit the plans details                      |
| `/plans/map`                  | PlansMapPage         | anon || user | Shows the map with all the plans available. You can see the details of a plan if you click on it. And go to the plan details page if you click on it again. You can also see the advertised plan                    |
| `/plans/categories`           | PlansCategoryPage    | anon || user | Shows the list of all the categories with the number of plans inside |
| `/plans/categories/:category` | PlansPage            | anon || user | Shows the list of all the plans available inside the category selected |
| `/user/profile`               | UserProfilePage      | user only    | Shows the page where the user can view his details            |
| `/user/profile/edit`          | UserProfileEditPage  | user only    | Shows the form to edit the users details                      |
| `/user/onboard`               | UserOnboardPage      | anon only    | Shows the form to complete the details of the user            |
| `/user/joinedPlans`           | UserJoinedPlansPage  | user only    | Shows all the plans the user has joined                       |
| `/user/createdPlans`          | UserCreatedPlansPage | user only    | Shows all the plans the user has created                      |
| `/user/chats`                 | UserChatsPage        | user only    | Shows all the chats the user has. Including individual and groupal chats |
| `/Users`                      | UsersPage            | anon || user | Shows all the users that are available to chat in the app     |
| `/Users/:id`                  | UsersDetailPage      | anon || user | Shows the user's details and personality traits. You can chat with the user but only if you are registered. If you haven't completed the onboarding process you will have to complete it.|




## Components

- Nav

- LowNav

- HomePage            

- AuthSignupPage      

- AuthLoginPage       

- PlansPage           

- PlansCreatePage     

- PlansDetailPage     

- PlansEditPage       

- PlansMapPage        

- PlansCategoryPage   

- PlansPage           

- UserProfilePage     

- UserProfileEditPage 

- UserOnboardPage     

- UserJoinedPlansPage 

- UserCreatedPlansPage

- UserChatsPage       

- UsersPage        

- UsersDetailPage


## Services

- Auth Service
- auth.login(userInfo)
- auth.signup(userInfo)
- auth.logout()
- auth.me()
- Plans Service
- plans.list()
- plans.detail(idPlan)
- plans.add(idPlan)
- plans.delete(idPlan)
- plans.edit(idPlan)

- User Service 
- user.me
- user.detail(idUser)
- user.delete(idUser)
- user.edit(id)
- user.joinPlan(idPlan)
- user.leavePlan(idPlan)
<!-- - user.chat(idUser)
- user.deleteChat(idChat) -->


<br>


# Server / Backend


## Models

User model

```javascript
{
- email - String, required, unique
- password -  String, required
- name - String, default: ''
- gender - String, enum ['male', 'female', 'others'], default: 'others'
- birthdate - Date, default: null
- interests - [ String, enum ['Culture', 'Drinks', 'Food', 'Party', 'Shopping', 'Sports', 'Travel', 'Volunteering', 'Others'], default: 'others'],
- plansOwned - [ ObjectId, ref: 'Plan' ],
- plansJoined - [ ObjectId, 'Plan' ],
- image - String, default: '/images/default-avatar.png',
- phoneNum - Number, default: null,
- status - String, enum ['pending', 'created', 'deleted'],
- timestamps
}



```

Plan model

```javascript
{
title - String, required
description - String,
status - String, enum ['created', 'completed', 'cancelled'],
date -Date,
category - String, enum ['Culture', 'Drinks', 'Food', 'Party', 'Shopping', 'Sports', 'Travel', 'Volunteering', 'Others'], required,
location - { type {type - String,default - 'Point'}, coordinates - []},
timestamps,
}
```

<!-- Player model

```javascript
{
name: String,
img: String,
score: []
}
```

Game model

```javascript
{
player1: [{type: Schema.Types.ObjectId,ref:'Participant'}],
player2: [{type: Schema.Types.ObjectId,ref:'Player'}],
player2: [{type: Schema.Types.ObjectId,ref:'Player'}],
winner: String,
img :String
}
``` -->


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                     | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | -------------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | /auth/profile               | Saved session                    | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | /auth/signup                | {name, email, password}          | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/login                 | {username, password}             | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | /auth/logout                | (empty)                          | 204            | 400          | Logs out the user                                            |
| GET         | /plans                      |                                  |                | 400          | Show all plans                                               |
| GET         | /plans/:id                  |                              |                |              | Show specific plan                                           |
| GET         | /plans/create-plan/         |                                | 201            | 400          | shows create plan form                                       |
| POST        | /plans/create-plan/:id      | {plan}                           | 201            | 400          | Create and save a new plan                                   |
| PUT         | /plans/join-plan/:id        | {idPlan}, {idUser}               | 201            | 400          | Create and save a new plan                                   |
| PUT         | /plans/leave-plan/:id       | {idPlan}, {idUser}               | 201            | 400          | Create and save a new plan                                   |
| PUT         | /plans/edit/:id             | {idPlan}, {idUser}               | 200            | 400          | edit plan                                                    |
| DELETE      | /plans/delete/:id           | {idPlan}                         | 201            | 400          | delete plan                                                  |
| GET         | /user/profile               | {idUser}                         |                | 400          | show user profile                                            |     |
| PUT         | /user/profile/edit          | {idUser}                         |                | 400          | edits the user information                                   |
| GET         | /user/joined-plans          | {idUser}                         |                | 400          | show all plans the user has joined                           |
| GET         | /user/created-plans         | {idUser}                         |                | 400          | show all plans the user has created                          |
| GET         | /users                      |                                  |                | 400          | show all the Users                                           |
| GET         | /users/:id                  | {id}                             |                |              | show specific user                                           |
|             |                             |                                  |                |              |                                                              |


<br>


## Links

### Trello/Kanban

https://trello.com/b/uEoazJJn/vale-20

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)