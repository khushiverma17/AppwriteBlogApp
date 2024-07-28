# Appwrite Blog App

## Description

This is a blog application built with React and Appwrite. The app allows users to create, read, update, and delete blog posts. Appwrite serves as the backend, providing authentication, database, and storage services.

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete blog posts
- Rich text editor for creating blog content
- Responsive design

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Appwrite
- **Editor**: TimyMCE

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- You have an Appwrite server set up and running
- You have created an Appwrite project and have the project ID and endpoint

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/khushiverma17/AppwriteBlogApp
    cd AppwriteBlogApp
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your Appwrite project configuration:
    ```env
    VITE_APPWRITE_URL=[YOUR APPWRITE URL]
    VITE_APPWRITE_PROJECT_ID=[YOUR PROJECT ID]
    VITE_APPWRITE_DATABASE_ID=[YOUR DATABASE ID]
    VITE_APPWRITE_COLLECTION_ID=[YOUR COLLECTION ID]
    VITE_APPWRITE_BUCKET_ID=[YOUR BUCKET ID]

    VITE_RTE_APIKEY=[YOUR API KEY OF RTE]
    ```

2. Ensure your Appwrite project has the necessary collections and attributes for users and blog posts.

### Running the App

Start the development server:
```bash
npm run dev
