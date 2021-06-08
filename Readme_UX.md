# Introduction
```
This app is a private fine-dining booking system for chefs and customers. 
There are two types of users and the app provides different services by each user type.
The chef-type user can post their profile and dining service information for customers and also, they can manage the booking details using the app. 
The customer-type user can get dining and chef profile information and can book service via the app.

User : Admin, Registered chef user, Registered customer user, Non-registered guest user

Entities: Users, Chef_Profiles, Dining-Lists, Bookings
```

# Github Address
```
Frontend: 
Backend: 
```

## Deployed Online
```
Web app is deployed on 'url' using Cloud web hosting services (AWS Ec2(Infrastructuree as a service or heroku-as platform as service) (Apache , Nginx)
```

## Installation Guidance

```
change api address in var api = "http://localhost:8090/" in libs/api/index.js;
```

## Business Rules
```

- Non-registered guest users can browse 'dining list & chef profile' but can't book without login.
- Non-registered guest users can register to be chef user type or customer user type.
- Login user will receive JWT and save on local storage,  to access secure API functions.
- The authenticated user must return a JWT to the server during auth to access secure API functions.
- Each page will be limited access by user type. The chef member can access 'My Dining' page, 'Post Dining'   page, and 'Update Dining List' page. 
- The chef user can create a chef profile on the 'My Dining' page as create icon button and check created profile on that page.
- The chef user can create,Update and delete the dining post on the 'Post Dining' page but a chef Profile must be created first.
- The chef user can check and delete the customer booking list on the 'My Dining' page.
- The customer user can browse 'dining list & chef profile' and book.
- Admin can create, update and delete the user on the admin management page, a record will be inserted into the database.
- An Admin has full permissions to CRUD any user account, the information of dining lists(future function), and booking lists(future function).
```

## To do next (Roadmap)
```
- Update all of the form components for image upload to use the file upload box instead of the URL. 
- Add Page and function for customers to be able to get Booking information on the personal page or by email.
- The “admin” page should be updated api and front script part for the admin to manage the booking list and dining list.
- Add payment system in the future.

```



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue-project.github.io
# vue-project.github.io
