# International Airport Data API

This project utilizes NestJS to provide an API for accessing international airport data sourced from [OurAirports](https://ourairports.com/data/).

## Features

- Retrieves international airport data including name, location, country, and other relevant information.
- Provides endpoints for querying airports based on various parameters such as country, type, and location.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL server

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/DyanGalih/nest-airports.git
```

2. Navigate into the project directory:

```bash
cd nest-airports
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```
DB_HOST=your_mysql_host
DB_PORT=your_mysql_port
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_DATABASE=your_mysql_database
PORT=3000
```

Replace `your_mysql_host`, `your_mysql_port`, `your_mysql_username`, `your_mysql_password`, and `your_mysql_database` with your MySQL database connection details.

5. Start the server:

```bash
npm start
```

The server will start running on port 3000 by default. You can change the port by modifying the `PORT` environment variable in the `.env` file.

6. Access the API:

You can now access the API at `http://localhost:3000`.

## Deployment

Follow these steps to deploy the repository to your personal server:

1. Ensure your server meets the prerequisites mentioned above.

2. SSH into your server.

3. Clone the repository onto your server:

```bash
git clone https://github.com/DyanGalih/nest-airports.git
```

4. Navigate into the project directory:

```bash
cd nest-airports
```

5. Install dependencies:

```bash
npm install --production
```

6. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```
DB_HOST=your_mysql_host
DB_PORT=your_mysql_port
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_DATABASE=your_mysql_database
PORT=3000
```

Replace `your_mysql_host`, `your_mysql_port`, `your_mysql_username`, `your_mysql_password`, and `your_mysql_database` with your MySQL database connection details.

7. Build the project:

```bash
npm run build
```

8. Start the server:

```bash
npm run start:prod
```

Your API should now be deployed and accessible on your personal server.

## API Documentation

You can find the API documentation [here](https://airport.ngeteh.id/docs/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.