#The generic questions (answers)

> 1. We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a
JWT is issued and our web-application uses this token for every request for
authentication.
Here's an example of such a token:
   `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb21lb25lQGV4YW1w
   bGUubmV0IiwiYWRtaW4iOmZhbHNlLCJ2YWxpZF91bnRpbCI6IldlZCBEZWMgMzEgM
   jM6NTk6NTkgQ0VTVCAxOTY5In0.4bl2puoaRetNjO1GsweKOnnQsYgwNa9bQIC-
   WQZkuNo`
Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it
into multiple lines)

To be safe this authentication method should have more steps and rules such as:
- The most important - expiration time for this token should be as less as possible. 
- While user is using the application this token should be regularly updated using refresh token.
- Web application should not pass this token using url params, because they can be cached on network level.
- Web application should not save this token in local storage, session storage is more appropriate. 
- A request for generating the token should not be cached, because usually, it consists of login and password.
- This token should not be stored at the database level, it can be easily compromised there.

Also, can be added more ways to secure communication between user and server:
- Using more than one factor to log in (to get a token), for instance, time-based codes that user receives 
by other communication channel such as SMS, Phone Call or Application to generate them.
- Every secure action in the system should be fully authorised with login, password and other methods.
- And much more...

> 2.In our web-application, messages sent from one user to another, can contain HTML,
which poses some security risks. Describe two attack vectors bad actors might try to
abuse? And how would you mitigate these vectors? 
 
####Persistent (Stored) XSS attack. 
A bad actor can inject malicious code to the request and store it on the web server. 
Then it can be server to another user amd run.

####Reflected XSS attack.
Can happen when server returns inputted HTML code back to the browser and application render it.

Both vectors can be avoided by sanitizing the user's input both on the backend and frontend side of the application.
But also it is important to teach users be attentive and do not click on suspicious links and do not open suspicious emails.

>3. Explain the difference between mutable and immutable objects.
>
>a. What is an example of an immutable object in JavaScript?
>
>b. What are the pros and cons of immutability?
>
>c. How can you achieve immutability in your own code?

a. Object and arrays in JavaScript is always mutable. But all primitives are immutable.

b. Pros
- Mutation tracking for state management such as NgRx or Redux.
- Predictability of the code.

Cons
- Can cause performance issues on huge datasets.

c.
- To create an immutable object you can Object.freeze() method.
- You can make a copy of an object using Object.assign() method.
- Or you can create a copy using spread operator (ellipsis or 3 dots).

> 4.If you would have to speed up the loading of our current web-application, how would you
do that? (no need to actually do it, just describe the steps you would take)

1. Check that all features are using lazy-loading and not injected into the root NgModel
2. Check for unnecessarily third-party libraries, that can be replaced with small services 
3. Check for minification of the files in production
4. Check and reduce image size if it is possible 
5. Check that scripts are at the bottom of the page and style are in head and loading asynchronicity
6. Check first requests and fire them simultaneously
7. Check Performance and Lighthouse tabs in Chrome DevTools
8. Use Web Worker for long heavy tasks if applicable
9. Reduce the number of redirects
10. Check for server response time and server configuration

This list is endless

PS I have read about AI technology that predicts user's behaviour and can load corresponding files in advance

> What part of a new job do you think is more important:
> 
>a. Choose your own hardware, but work with a company supplied operating system
>image.
> 
>b. You're offered a standard piece of mediocre hardware. Free to pick your own
>Software.

I would say A.
It is better to control user's software to prevent security risks to the company.
If users install any software that they want to it can lead to damages.
Also, hardware is more important, in big projects, especially for development purposes.
Usually, it takes a lot of resources from the computer to run a development assembly. 
