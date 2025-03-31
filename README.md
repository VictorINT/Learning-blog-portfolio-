# STEM Learning Blog & Portfolio

A platform designed to help users learn STEM subjects while showcasing a portfolio. The project features a blog-style interface for educational content and portfolio items. It includes an admin page for managing content and a backend that allows users to upload HTML files with links to images stored on Google Drive. These HTML files are stored in MySQL for later retrieval.

## Features

- **User Authentication**: Users can sign in using OAuth2, allowing for secure access to personalized content.
- **Admin Page**: Admins can manage content, including uploading HTML files and storing them in the MySQL database.
- **HTML Upload**: Users can upload HTML files containing links to images stored in Google Drive, and the HTML content is stored in MySQL for easy access.
- **Vue.js Frontend**: The frontend is built with Vue.js and TypeScript for a modern and reactive user experience.
- **Backend**: The backend is built with Spring Boot, MySQL, and Hibernate to manage and store user data, content, and HTML files.

## Tech Stack

- **Frontend**:
  - Vue.js with TypeScript
  - HTML/CSS (for styling)
- **Backend**:
  - Spring Boot
  - MySQL with Hibernate
  - OAuth2 Authentication
- **Database**:
  - MySQL

## Project Setup

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name/backend
   ```

2. **Install dependencies**:
   - Make sure you have Java 11 or later installed.
   - Run the following command to build the project:
     ```bash
     ./mvnw clean install
     ```

3. **Configure your MySQL database**:
   - Create a new database in MySQL (e.g., `stem_blog`).
   - Update the `application.properties` file in `src/main/resources` with your MySQL database credentials.
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/stem_blog
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   spring.jpa.hibernate.ddl-auto=update
   ```

4. **Run the backend**:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will now be running on `http://localhost:8080`.

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name/frontend
   ```

2. **Install dependencies**:
   - Make sure you have Node.js and npm/yarn installed.
   - Run the following command to install the dependencies:
     ```bash
     npm install
     ```

3. **Run the frontend**:
   ```bash
   npm run dev
   ```

   The frontend will now be running on `http://localhost:3000`.

### OAuth2 Configuration

1. **Set up OAuth2 authentication**:
   - Use services like Google or GitHub for OAuth2 authentication. Follow their respective guides to set up OAuth2 credentials.
   - Add the client ID and client secret in the backend configuration file.

2. **Enable CORS**:
   - The backend needs to handle Cross-Origin Resource Sharing (CORS) requests from the frontend. Ensure that the backend is configured to allow requests from `http://localhost:3000`.

## Admin Page

The Admin page allows you to upload HTML files that contain links to images stored on Google Drive. The HTML content will be saved to the MySQL database.

1. **Upload HTML**:
   - Navigate to the admin page and upload an HTML file containing links to Google Drive images.
   - The file is stored in the database for later retrieval.

2. **Content Management**:
   - The admin can view, edit, or delete uploaded HTML files.

## Running the Full Application

1. **Start the Backend**:
   - Ensure the backend is running on `http://localhost:8080`.

2. **Start the Frontend**:
   - Ensure the frontend is running on `http://localhost:3000`.

3. **Access the Application**:
   - Visit `http://localhost:3000` in your browser to access the frontend and interact with the blog and portfolio.

## Contributing

We welcome contributions! If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

