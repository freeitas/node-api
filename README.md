# App

GymPass style app.

## functional requirements

- [x] must be able to signup;
- [x] must be able to signin;
- [ ] must be able to get the profile from the logged user;
- [ ] must be able to get the numbers of check-ins from logged user;
- [ ] must be able to user get his history of check-ins;
- [ ] must be able to user find near gyms;
- [ ] must be able to user find gyms by name;
- [ ] must be able to user make a check-in on a gym;
- [ ] must be able to validade check-in from a user;
- [ ] must be able to register an gym;

## business rules

- [x] User cant signup with an e-mail already registred;
- [ ] User cant make 2 check-ins on the same day;
- [ ] User cant make an check-in if hes not near (100m) from the gym;
- [ ] Check-in must only be validate until 20 minutes after being created;
- [ ] Check-in must only be validate by admins;
- [ ] Gyms must only be registred by admins;

## non-functional requirements

- [x] User password must be encrypted;
- [x] Data must be persisted in a PostgreSQL database;
- [ ] All listed data must be paginated by 20 itens by page;
- [ ] User must be validate by an JWT (JSON Web Token);