# lebaba-ecommerce-starter-files
![lebaba-ecommerce-starter-files](/src/assets/github-cover.png)

## How to run this project:

### For Frontend 
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.


### For Backend
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 
```
MONGODB_URL = 'mongodb+srv://mdalmamunit427:RhkUPYwpWwzzX8If@lebaba-ecommerce.qgsnv.mongodb.net/lebaba-ecommerce?retryWrites=true&w=majority&appName=lebaba-ecommerce'

JWT_SECRET_KEY = "4b74bc201ddfc036db3f2cf8171565a306dffa7caef5074ea9429ddf7532522722e8a36f699945d34e605b34f9a33d89f00084197e3564a8ba6a948e6c2ad1ce"

STRIPE_SECRET_KEY="sk_test_51Po3X5LV8UbWx9Ij1HIwJYniRLps8gZmfOFXrBcwQk1BH204TvdKiV4U0odayxpetPKNfxyGz0nacOLMTQobNg0H00bxcsoqEY"

CLOUDINARY_CLOUD_NAME="dn2gccqlw"
CLOUDINARY_API_KEY="791369242134249"
CLOUDINARY_API_SECRET="zH4Ix2R_WM-DWG_Vr3ZAECUPlmE"

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

- Finally, to run the project, use ``npm run start:dev`` command.
