## Form.io Developer Interview
This is an "open book" interview, which means you may use, and is even encouraged to use, any resource to complete the tasks, including Google, Stack Overflow, etc.

There are also other README files in the folders to help familiarize yourself with the code structure.

Please follow the steps provided to complete the interview. 

### Step 1: Clone the repo
Using GIT, clone this repo onto your local machine.

### Step 2: Install the modules
Using npm or yarn, now install the node modules on your local machine.

### Step 3: Create an API Proxy
Now turn the root **index.js** into a Node.js server application. The first objective is to create an API endpoint at **GET: /customers** that is an anonymously accessible reverse proxy for an authenticated API. This route should be created within the **api** folder. There is additional documentation in that folder to assist you. The API that you will proxy will be the following, and you can use Postman to first test this API if you would like.

    {
       url: https://interview.form.io/customers/submission,
       method: 'GET',
       headers: {
          'x-token': [VALUE PROVIDED BY INTERVIEWER]
       }
    }

### Step 4: Statically host the public folder
Now, within the Node.js server application, you will need to statically host the **public** folder at the root level of the node server. For example, if I navigate to https://localhost:3000 it will show me the website (index.html) within the **public** folder.

### Step 5: Extend the application
Modify the application in the **src** folder. Expand the ListComponent.ts to allow it to take an argument that is the endpoint of the customers, and then it will load those customers, and then display the results in a list.

#### For example:
The following code.

    new ListComponent(document.getElementById('list'), 'http://localhost:3000/customers');

Will produce the following in the application.

- John Elway
- Steve Young
- Joe Montana
- Tony Romo
- etc.

There is an additionial README file in the **src** folder to provide more assistance, but you can run this application in development mode using the following.

    npm run serve

And you can compile it using the following.

    npm run build
