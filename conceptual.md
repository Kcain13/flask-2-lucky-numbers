### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    RESTful routing is an approach to desiging endpoints (URLs) and the structure of a web application or API based on the principles of Representational State Transfer (REST). REST is an architecrual style that emphasizes a stateless client-server communication model, where resources are identified by URLS, and interactions are performed using stardard HTTP methods (such as GET, POST, PUT, DELETE)


- What is a resource?
    Resources are entities that your application works with, and each resource should have a unique and meanigful identifer. The URLS should reflect the resources and their hierarchical relationships.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    Including routes that render HTML forms contradicts the stateless nature of RESTful APIs and adds unnecessary complexity.

    For creating a new user, the client typically sends a POST request to the appropriate endpoint (`/users`) with th enecessary data in the request body in JSON format. The server processes the request, creates a new user, and responds with a JSON represenation of the newly created user or relevant status information. 

- What does idempotent mean? Which HTTP verbs are idempotent? 
    An idempotent operation is one that, when performed multiple times, has the same result as if it were performed only once. Overall, the same request mulitple times should have the same effect as making the request once.

    GET, HEAD, PUT, DELETE - are all considered idempotent 

- What is the difference between PUT and PATCH?
     PUT is used for complete replacements of a resource, and it expects the client to send the full updated representation. PATCH is used for partial updates, allowing clients to send only the changes they want to apply to the resource. PATCH is not guaranteed to yield the same result everytime, it depends on the server implementation. 

- What is one way encryption?
    AKA one-way hasing, refers to a cryptographic process where data is transformed into a fixed-size string of characters (hash value) using a one-way function. The purpose of one-way encryption is to securely store and verify data without exposing the sensitive information itself. 
    
    Some key points about one-way encryption are:
        - Irreversibility (difficult to take hask value and reverse engineer original data)
        - Consistent Output Size (size of input has no effect on hash digest)
        - Collision Resistance (prevent diff      inputs producing the same has value)
        - Common Algorithms (SHA-256, bcrypt)

- What is the purpose of a `salt` when hashing a password?
    `salt` (adding random data to each input before hashing) is to further enchance security. The random data will help stop hackers from guessing original input that produced the specific hash value.

- What is the purpose of the Bcrypt module?
    It is used for securely hashing passwords.
    Key features include:
         - Password hashing (transforms plaintext passwords into irreversible has values)
         - Computational Intensity (intensity makes it slow, done intentionally, to mitigate brute-force attacks)
         - Adapative Work Factor (Cost Factor - can be adjusted to maintain a consistent level)
         - Resistantce to Rainbow Table Attacks  ( Bcrypt adds a layer of security by making it impractical to use precomuted tables)
         - Salt Generation (generates and manages salts automatically)

- What is the difference between authorization and authentication?
    Authentication precedes authorizaiton in the access control process, as you need to know who is making a request before deciding what actions or resources they are allowed to access. 

    Authentication is about verifying the identity of a user or entity, while authorization is about determining the level of access or permissions granted to that authenticated entity.

