# Labspy 🔬

A Django-based collaborative laboratory management system for organizing lab spaces, team members, and research documents.

## Features

- **Lab Space Management** — Create and manage virtual laboratory workspaces
- **User Authentication** — Secure account creation and authentication with django-allauth
- **Role-Based Access Control** — Define custom roles and permissions for lab members
- **Document Management** — Upload, organize, and share research documents with categories and tags
- **Team Collaboration** — Invite members, manage lab memberships, and track user activities
- **Activity Logging** — Audit trail of all lab actions and changes
- **Multi-User Support** — Support for different user types with customizable permissions
- **Document Thumbnails** — Automatic thumbnail generation for uploaded documents
- **Inventory Management** — Track lab inventory and stock items
- **Scheduling** — Built-in scheduling system for lab events and tasks

## Tech Stack

- **Backend**: Django 5.2
- **Database**: SQLite (default, configurable)
- **Authentication**: django-allauth
- **REST Framework**: Django REST Framework
- **Image Processing**: Pillow
- **Other**: nanoid for ID generation, django-active-link for navigation

## Prerequisites

- Python 3.8+
- pip or poetry

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/labspy.git
   cd labspy
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**
   ```bash
   python manage.py migrate
   ```

5. **Create a superuser**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server**
   ```bash
   python manage.py runserver
   ```

   The application will be available at `http://localhost:8000`

## Project Structure

```
labspy/
├── labspaces/          # Lab space management (models, views, templates)
├── documents/          # Document upload and management
├── users/              # User authentication and profiles
├── stock/              # Inventory and stock management
├── schedule/           # Event scheduling system
├── spy/                # Core app
├── inventory/          # Inventory tracking
├── labspy/             # Project settings and configuration
├── templates/          # Global templates
├── manage.py           # Django management script
└── requirements.txt    # Python dependencies
```

## Key Apps

### **Labspaces**
Manages laboratory workspaces. Features include:
- Create and customize lab spaces
- Invite and manage team members
- Define custom roles and permissions
- Track lab activity and changes

### **Documents**
Handles document management:
- Upload files and documents
- Organize documents by categories
- Tag documents for easy search
- Generate document thumbnails

### **Users**
User management and authentication:
- User registration and login
- Custom user profiles
- Account management

### **Stock & Inventory**
Track lab supplies and equipment:
- Manage inventory items
- Track stock levels

### **Schedule**
Event and task scheduling:
- Create lab events
- Schedule team tasks and meetings

## Usage

### Creating a Lab Space

1. Log in to your account
2. Click "New labspace" button
3. Enter lab name, description, and contact email
4. Click Create

### Managing Documents

1. Navigate to your lab space
2. Go to the Documents section
3. Click "Upload Document"
4. Select a file, add title, description, category, and tags
5. Upload

### Inviting Members

1. Go to your lab space
2. Navigate to Members section
3. Enter member email or lab code
4. Select a role
5. Send invitation

## Configuration

### Environment Variables

Set up a `.env` file in the project root (optional):

```env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Database

By default, Labspy uses SQLite. To use PostgreSQL or MySQL:

1. Update `DATABASES` in `labspy/settings.py`
2. Install the appropriate database driver
3. Run migrations

## Development

### Running Tests

```bash
python manage.py test
```

### Creating Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Django Admin

Access the admin panel at `/admin` with your superuser credentials to:
- Manage users
- Configure roles
- Monitor activity logs
- Manage document categories

## API Endpoints

Labspy includes REST API endpoints for programmatic access. Key endpoints:

- `GET /api/labs/` — List labs
- `POST /api/labs/` — Create a lab
- `GET /api/documents/` — List documents
- `POST /api/documents/` — Upload a document
- `GET /api/users/` — List users

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License — see the LICENSE file for details.

## Support

For issues, questions, or feature requests, please open an issue on the [GitHub repository](https://github.com/yourusername/labspy/issues).

## Roadmap

- [ ] Advanced search and filtering
- [ ] Real-time collaboration features
- [ ] Mobile app support
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Enhanced notification system
- [ ] Data export functionality
- [ ] Integration with lab equipment systems

---

**Labspy** — Simplifying Laboratory Collaboration 🔬
